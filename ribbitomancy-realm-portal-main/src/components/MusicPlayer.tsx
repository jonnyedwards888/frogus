
import { useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLIFrameElement>(null);

  // Auto-play when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      // Send message to the iframe to play
      if (audioRef.current) {
        const message = { method: 'play' };
        audioRef.current.contentWindow?.postMessage(JSON.stringify(message), '*');
      }
    }, 2000); // Slight delay to ensure the iframe is loaded
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden">
      <iframe
        ref={audioRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1564047265&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
