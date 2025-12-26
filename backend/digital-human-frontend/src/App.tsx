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
const LIVEKIT_URL = "wss://your-project.livekit.cloud";
const TOKEN = "YOUR_GENERATED_TOKEN";

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