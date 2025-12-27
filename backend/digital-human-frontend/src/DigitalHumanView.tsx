import React from 'react';
import { useTracks, useParticipants, VideoTrack } from '@livekit/components-react';
import { Track } from 'livekit-client';

export const DigitalHumanView = () => {
  // 1. Get ALL participants (You + Avatar)
  const participants = useParticipants();
  
  // 2. Get ALL camera tracks
  const tracks = useTracks([Track.Source.Camera]);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>Room Debug Info</h3>
      <p>Users in Room: {participants.length}</p>
      <ul>
        {participants.map(p => (
          <li key={p.identity}>
            {p.identity} {p.isLocal ? "(You)" : "(Remote)"} 
            {p.isSpeaking ? " 🔊 Speaking" : ""}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {tracks.map((track) => (
          <div key={track.publication.trackSid} style={{ width: '400px' }}>
            <VideoTrack trackRef={track} style={{ width: '100%' }} />
            <p>{track.participant.identity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};