import type React from 'react';
import { useEffect, useRef } from 'react';

interface ScreenShareVideoProps {
  stream: MediaStream;
}

const ScreenShareVideo: React.FC<ScreenShareVideoProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={false}
      className="h-full w-full object-cover"
    />
  );
};

export default ScreenShareVideo;
