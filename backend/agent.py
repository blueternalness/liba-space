import asyncio
import logging
from livekit.agents import (
    AutoSubscribe,
    JobContext,
    JobProcess,
    WorkerOptions,
    cli,
)
from livekit.agents.llm import LLM
from livekit.plugins import tavus, openai, deepgram

# Configure logging
logger = logging.getLogger("tavus-agent")

async def entrypoint(ctx: JobContext):
    # Connect to the LiveKit Room
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)
    
    # 1. Initialize the Tavus Avatar Session
    # This brings the visual 2D/3D human into the room
    avatar = tavus.AvatarSession(
        replica_id="rfcc944ac6",   # Get from Tavus Dashboard (e.g., r783537ef5)
        persona_id="p98c33698664",   # Created in Step 2
    )

    # 2. Start the Avatar
    # This triggers Tavus to join the room as a video participant
    await avatar.start(ctx.room)
    logger.info("Tavus Avatar has joined the room")

    # 3. Define the Conversation Logic (The Brain)
    # We use LiveKit's VoicePipelineAgent to handle STT -> LLM -> TTS
    # The 'avatar' object effectively becomes the "speaker" for the agent
    agent = VoicePipelineAgent(
        vad=silero.VAD.load(),
        stt=deepgram.STT(),              # Low latency Speech-to-Text
        llm=openai.LLM(),                # Intelligence
        tts=openai.TTS(),                # Text-to-Speech
        chat_ctx=initial_ctx,
    )

    # 4. Link Agent Output to Tavus
    # (Conceptual) In a full integration, the audio output of this agent 
    # is routed to the Tavus 'echo' persona, or we simply let Tavus 
    # handle the full stack if configured in 'conversation' mode.
    
    # For this test, we assume 'conversation' mode where Tavus handles logic,
    # OR we use the avatar.say() method if controlling manually:
    
    # Example: Manually making the avatar speak
    # await avatar.speak("Hello! I am your real-time digital assistant.")

    await agent.start(ctx.room)
    
    # Wait for the job to finish (e.g., user leaves)
    await ctx.wait_for_disconnect()

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))