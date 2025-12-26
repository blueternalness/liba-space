// src/DigitalHumanView.tsx
import React from 'react';
import { useTracks, VideoTrack } from '@livekit/components-react';
import { Track } from 'livekit-client';

export const DigitalHumanView = () => {
  // Subscribe to all camera tracks (Both yours and the Avatar's)
  const tracks = useTracks([Track.Source.Camera]);

  return (
    <div style={containerStyle}>
      {tracks.length === 0 && (
        <div style={placeholderStyle}>Waiting for video stream...</div>
      )}

      {tracks.map((track) => (
        <div key={track.publication.trackSid} style={videoWrapperStyle}>
          {/* The actual video player */}
          <VideoTrack 
            trackRef={track} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          
          {/* Label to identify who is speaking */}
          <div style={labelStyle}>
            {track.participant.isLocal ? "You" : "Digital Human"}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Styles ---
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
  height: '100%',
  padding: '20px',
  boxSizing: 'border-box',
};

const videoWrapperStyle: React.CSSProperties = {
  position: 'relative',
  width: '45%',          // Split screen width
  maxWidth: '600px',
  aspectRatio: '16/9',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#000',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
};

const placeholderStyle: React.CSSProperties = {
  color: '#888',
  alignSelf: 'center',
  fontSize: '1.2rem',
};

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: 'white',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '14px',
};