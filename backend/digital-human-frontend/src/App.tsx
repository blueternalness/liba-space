// src/App.tsx
import React from 'react';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  ControlBar,
} from '@livekit/components-react';
import '@livekit/components-styles';

// Import your custom component
import { DigitalHumanView } from './DigitalHumanView';

// Configuration (Replace with your actual keys/token)
const LIVEKIT_URL = "wss://liba-space-nvph2p15.livekit.cloud";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjY3OTYxODgsImlkZW50aXR5IjoidXNlcjEiLCJpc3MiOiJBUElmQmpBa1V3cm93a3IiLCJuYW1lIjoidXNlcjEiLCJuYmYiOjE3NjY3OTU4ODgsInN1YiI6InVzZXIxIiwidmlkZW8iOnsicm9vbSI6Im15LXRlc3Qtcm9vbSIsInJvb21Kb2luIjp0cnVlfX0.dTi_V1YCaDxPTpj1cCBoYI1C9rfAiVXIfmMLYbnNvUI";


export default function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#111', display: 'flex', flexDirection: 'column' }}>
      
      <LiveKitRoom
        video={true}
        audio={true}
        token={TOKEN}
        serverUrl={LIVEKIT_URL}
        connect={true}
        data-lk-theme="default"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {/* 1. The Video Area (Your custom component) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <DigitalHumanView />
        </div>

        {/* 2. Audio Renderer (Invisible, handles incoming audio) */}
        <RoomAudioRenderer />

        {/* 3. Control Bar (Mute/Unmute/Camera) */}
        <ControlBar style={{ marginBottom: '20px' }} />
        
      </LiveKitRoom>
    </div>
  );
}