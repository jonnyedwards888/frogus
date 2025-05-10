
import { useEffect, useState } from 'react';

interface Symbol {
  id: number;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  symbol: string;
  animationDelay: number;
}

const symbols = ['✨', '✧', '⋆', '⁂', '☽', '☆', '△', '◇', '⚝', '⌘'];

const FloatingSymbols = () => {
  const [magicalSymbols, setMagicalSymbols] = useState<Symbol[]>([]);

  useEffect(() => {
    // Create random magical symbols
    const symbolCount = Math.floor(window.innerWidth / 100); // Adjust based on screen size
    const newSymbols = Array(symbolCount).fill(0).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotate: Math.random() * 360,
      scale: 0.5 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.5,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      animationDelay: Math.random() * 10
    }));
    
    setMagicalSymbols(newSymbols);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {magicalSymbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute text-wizard-gold magical-glyph animate-particle-float"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            transform: `rotate(${symbol.rotate}deg) scale(${symbol.scale})`,
            opacity: symbol.opacity,
            fontSize: `${1 + symbol.scale}rem`,
            animationDelay: `${symbol.animationDelay}s`
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingSymbols;
