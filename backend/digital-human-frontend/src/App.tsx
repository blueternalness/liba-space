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
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjY4MDEzOTMsImlkZW50aXR5IjoidXNlcjciLCJpc3MiOiJBUElmQmpBa1V3cm93a3IiLCJuYW1lIjoidXNlcjciLCJuYmYiOjE3NjY4MDEwOTMsInN1YiI6InVzZXI3IiwidmlkZW8iOnsicm9vbSI6InRlc3Qtcm9vbS03Iiwicm9vbUpvaW4iOnRydWV9fQ.SiSOU0oFlkNYf6O7dqPp7UMN4pqPbqG_q-CoF2lUsvQ";


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