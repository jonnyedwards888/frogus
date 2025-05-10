
import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionY = section.getBoundingClientRect().top + scrollY;
      
      // Calculate parallax offset based on scroll position relative to the section
      const offset = (scrollY - sectionY) * speed;
      
      // Apply transform to create parallax effect
      section.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div 
      ref={sectionRef}
      className={`relative parallax-layer ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
