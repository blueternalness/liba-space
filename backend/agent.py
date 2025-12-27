"""
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
import os

# Set a new environment variable
os.environ['LIVEKIT_API_KEY'] = 'APIfBjAkUwrowkr'
os.environ['LIVEKIT_API_SECRET'] = 'fBh2wC3Pi2xCbRVhfwhfG4BO2jeqEYnyHwUtCIxenjzH'
os.environ['LIVEKIT_URL'] = 'wss://liba-space-nvph2p15.livekit.cloud'
os.environ['TAVUS_API_KEY'] = 'a4d81de4d95d464287d3e3342ab3fa3d'

LIVEKIT_URL=wss://your-project.livekit.cloud
LIVEKIT_API_KEY=APIne...
LIVEKIT_API_SECRET=sec...


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

    await agent.start("my-test-room")
    # await agent.start(ctx.room)
    
    # Wait for the job to finish (e.g., user leaves)
    await ctx.wait_for_disconnect()

    if __name__ == "__main__":
        cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))    
"""
import logging
import asyncio
from dotenv import load_dotenv
import os

# 1. NEW IMPORTS for LiveKit Agents v1.0+
from livekit.agents import (
    AutoSubscribe,
    JobContext,
    WorkerOptions,
    cli,
    AgentSession,  # Imported directly (was livekit.agents.pipeline)
)
from livekit.plugins import tavus, openai, deepgram, silero

load_dotenv()
logger = logging.getLogger("tavus-agent")
os.environ['LIVEKIT_API_KEY'] = 'APIfBjAkUwrowkr'
os.environ['LIVEKIT_API_SECRET'] = 'fBh2wC3Pi2xCbRVhfwhfG4BO2jeqEYnyHwUtCIxenjzH'
os.environ['LIVEKIT_URL'] = 'wss://liba-space-nvph2p15.livekit.cloud'
os.environ['TAVUS_API_KEY'] = 'a4d81de4d95d464287d3e3342ab3fa3d'

async def entrypoint(ctx: JobContext):
    # Connect to the room
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)
    logger.info(f"Connected to room: {ctx.room.name}")
    print("############")
    print(ctx.room.name)

    # 2. Create the Agent Session
    # This orchestrates the STT -> LLM -> TTS pipeline
    session = AgentSession(
        vad=silero.VAD.load(),
        stt=deepgram.STT(),              # Speech-to-Text
        llm=openai.LLM(model="gpt-4o"),  # Brain
        tts=openai.TTS(),                # Voice
    )

    # 3. Configure the Tavus Avatar
    # Ensure 'persona_id' was created with transport_type: "livekit"
    avatar = tavus.AvatarSession(
        replica_id="r7bc3db0d581",       # Example: Sabrina
        persona_id="p98c33698664",               # <--- PASTE YOUR GENERATED PERSONA ID HERE
    )

    # 4. Start the Avatar
    # We explicitly pass the 'session' and the 'room'
    await avatar.start(session, room=ctx.room)
    logger.info("Tavus avatar connected!")

    # 5. Start the Agent Session
    # This enables the "Brain" to start listening and responding
    await session.start(ctx.room)
    
    await ctx.wait_for_disconnect()

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
    print(1123)