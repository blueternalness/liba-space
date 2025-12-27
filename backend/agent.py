import os


os.environ['LIVEKIT_API_KEY'] = ''
os.environ['LIVEKIT_API_SECRET'] = ''
os.environ['LIVEKIT_URL'] = ''
os.environ['TAVUS_API_KEY'] = ''
os.environ['DEEPGRAM_API_KEY'] = ''
os.environ['OPENAI_API_KEY'] = ''

import logging
import asyncio
from dotenv import load_dotenv

from livekit.agents import (
    AutoSubscribe,
    JobContext,
    WorkerOptions,
    cli,
    Agent,
    AgentSession,
    llm,  # Base LLM class
)
from livekit.plugins import tavus, openai, deepgram

load_dotenv()
logger = logging.getLogger("tavus-agent")

# --- 1. DEFINE THE MOCK STREAM ---
# This mimics the data structure LiveKit expects
class MockStream(llm.LLMStream):
    def __init__(self):
        # Pass an empty context to satisfy the base class requirements
        super().__init__(chat_ctx=llm.ChatContext(), fnc_ctx=None)

    async def __aiter__(self):
        # We manually yield the text "chunk" that the avatar will speak
        text = "I am a digital human. Your OpenAI account has no credits, but my video and lip sync are working perfectly!"
        
        yield llm.ChatChunk(
            choices=[
                llm.Choice(
                    delta=llm.ChoiceDelta(content=text, role="assistant"),
                    index=0
                )
            ]
        )

# --- 2. DEFINE THE MOCK LLM ---
class MockLLM(llm.LLM):
    def __init__(self):
        super().__init__()

    # Accept any arguments (history, chat_ctx, etc.) so it doesn't crash
    def chat(self, **kwargs):
        return MockStream()

# --- 3. MAIN ENTRYPOINT ---
async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)
    logger.info("✅ Connected to LiveKit")

    logger.info("⏳ Waiting for user...")
    participant = await ctx.wait_for_participant()
    logger.info(f"User joined: {participant.identity}")

    agent = Agent(instructions="You are helpful.")

    # Use our MOCK LLM to bypass OpenAI billing
    session = AgentSession(
        stt=deepgram.STT(),
        llm=MockLLM(),      # <--- Using our custom class
        tts=openai.TTS(), 
    )

    # Initialize Tavus
    avatar = tavus.AvatarSession(
        replica_id="r7bc3db0d581", 
        persona_id="p98c33698664", # <--- PASTE YOUR ID
    )

    await avatar.start(session, room=ctx.room)
    logger.info("✅ Tavus Avatar Joined!")

    await session.start(room=ctx.room, agent=agent)
    logger.info("🗣️ Conversation Active (Mock Mode)")
    
    # Keep the process alive
    try:
        await asyncio.Future()
    except asyncio.CancelledError:
        pass

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))