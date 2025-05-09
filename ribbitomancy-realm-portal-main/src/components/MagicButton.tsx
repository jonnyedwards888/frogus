
import { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface MagicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MagicButton = ({ children, onClick }: MagicButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glows, setGlows] = useState<JSX.Element[]>([]);

  // Create magical glow particles when hovering
  useEffect(() => {
    if (!isHovering) return;
    
    const interval = setInterval(() => {
      if (buttonRef.current) {
        const newGlow = (
          <div
            key={Date.now()}
            className="absolute w-2 h-2 rounded-full bg-wizard-gold opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10px',
              filter: 'blur(3px)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        );
        
        setGlows(prev => [...prev.slice(-10), newGlow]); // Keep only last 10 glows
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden font-magic px-8 py-3 rounded-lg 
                 bg-wizard-purple text-white border-2 border-wizard-gold 
                 transform transition-all duration-300 shadow-lg
                 ${isHovering ? 'scale-105 shadow-wizard-teal/50' : ''}
                 hover:shadow-xl hover:shadow-wizard-teal/30`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {/* Background glow */}
      <div className={`absolute inset-0 bg-wizard-teal opacity-0 transition-opacity duration-300 blur-md ${isHovering ? 'opacity-20' : ''}`} />
      
      {/* Button content with icon */}
      <div className="relative flex items-center justify-center gap-2">
        <Sparkles size={18} className="text-wizard-gold animate-pulse-glow" />
        <span>{children}</span>
      </div>
      
      {/* Magical glow particles */}
      {glows}
      
      {/* Shimmer effect */}
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ${isHovering ? 'opacity-10' : ''}`}
        style={{ 
          transformOrigin: 'left',
          transform: 'skewX(-20deg) translateX(-100%)',
          animation: isHovering ? 'shimmer 1.5s infinite' : 'none',
        }}
      />
    </button>
  );
};

export default MagicButton;
