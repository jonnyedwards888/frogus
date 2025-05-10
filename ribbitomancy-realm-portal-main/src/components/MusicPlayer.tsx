import React, { useEffect, useRef } from 'react';

export const MusicPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to send play command to the iframe
    const playMusic = () => {
      if (iframeRef.current) {
        const message = { method: 'play' };
        iframeRef.current.contentWindow?.postMessage(JSON.stringify(message), '*');
      }
    };

    // Try to play after a short delay to ensure iframe is loaded
    const timer = setTimeout(playMusic, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      width="0"
      height="0"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1564047265&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
      style={{ display: 'none' }}
    />
  );
};
