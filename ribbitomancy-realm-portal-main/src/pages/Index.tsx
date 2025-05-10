import React from 'react';

const matrixSymbols = ['🐸', '✨', '卐', '∑', 'Ω', '∇', 'λ', 'π', 'Ж', '★', '♆', '⟁', '⟁', '⟁', '⟁', '⟁'];

function getRandomSymbol() {
  return matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
}

function MatrixRain() {
  // Make the animation smoother and more seamless by staggering delays and durations
  const columns = 30;
  const rows = 20;
  // Generate a random delay and duration for each symbol
  const delays = Array.from({ length: columns * rows }, () => Math.random() * 3);
  const durations = Array.from({ length: columns * rows }, () => 2.5 + Math.random() * 2.5);
  let symbolIdx = 0;
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {[...Array(columns)].map((_, colIdx) => (
        <div key={colIdx} className="absolute top-0" style={{ left: `${(colIdx / columns) * 100}%` }}>
          {[...Array(rows)].map((_, rowIdx) => {
            const delay = delays[symbolIdx];
            const duration = durations[symbolIdx];
            symbolIdx++;
            return (
              <div
                key={rowIdx}
                className="matrix-symbol text-white/30 text-lg md:text-2xl font-bold animate-matrix"
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                {getRandomSymbol()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// Funky drifting emojis for vaporwave/cyber-fantasy chaos
const DRIFT_EMOJIS = ['🐸', '✨', '🌈', '🦄', '💾', '💸', '🪐', '👾', '🎲', '🧙‍♂️', '🔮', '💿', '🦋', '🌟', '🛸', '🎮', '🦑', '🍄', '⚡', '🎆', '🧬', '🦠', '🦜', '🦕', '🦖'];
function DriftingEmojis({ count = 24 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        const emoji = DRIFT_EMOJIS[Math.floor(Math.random() * DRIFT_EMOJIS.length)];
        const left = Math.random() * 100;
        const size = 1.5 + Math.random() * 2.5;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 8;
        return (
          <span
            key={i}
            className="drift-emoji"
            style={{
              left: `${left}%`,
              fontSize: `${size}rem`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              top: '-10vh',
            }}
          >
            {emoji}
          </span>
        );
      })}
    </>
  );
}

const frogusCardImg = '/frogus-yugioh-card.png';

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-animated-gradient overflow-hidden">
      <div className="bg-hieroglyphs" />
      <DriftingEmojis count={32} />
      <div className="bg-shimmer" />
      <MatrixRain />
      <header className="z-10 mt-10 mb-4 text-center">
        <h1 className="holo-text font-extrabold text-5xl md:text-7xl tracking-widest mb-2" style={{letterSpacing:'0.1em'}}>$FROGUS</h1>
        <p className="font-bold text-2xl md:text-3xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] mb-4">Leap Into Wizardry</p>
      </header>
      <main className="z-10 flex flex-col items-center">
        {/* Centered Card Image */}
        <div className="holo-card frogus-card bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 border-4 border-fuchsia-500 rounded-2xl shadow-2xl p-4 mb-8 max-w-xs w-full relative flex flex-col items-center">
          <img src={frogusCardImg} alt="Frogus Card" className="rounded-xl border-4 border-emerald-400 shadow-lg w-full h-auto bg-white" />
        </div>
        {/* Terminal/List */}
        <div className="bg-black/80 border-2 border-emerald-400 rounded-lg shadow-lg p-4 max-w-md w-full mb-8 flex flex-col items-center">
          <div className="text-emerald-300 font-mono mb-2">FROGUS.WIZ</div>
          <ul className="text-yellow-200 font-mono text-lg space-y-1 mb-4">
            <li>&gt; leap $frogus</li>
            <li>&gt; wizard/tx/ribbit</li>
            <li>&gt; frogchain university</li>
            <li>&gt; cast spell or get leapt</li>
            <li>&gt; $frogus</li>
          </ul>
          {/* Twitter/X logo link */}
          <a
            href="https://x.com/i/communities/1920972267368182114"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hover:scale-110 transition-transform"
            title="Join the Frogus Community on X"
          >
            <img src="/x-logo.jpg" alt="X (Twitter) Community" className="rounded-full border-2 border-white shadow" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
          </a>
        </div>
      </main>
      <footer className="z-10 w-full py-6 text-center text-white font-bold bg-gradient-to-r from-fuchsia-600 via-emerald-500 to-cyan-500 bg-opacity-80 border-t-4 border-fuchsia-400 mt-8 shadow-lg">
        © Frogus 2024 | The Wizard Coin of the Amphibian Age
      </footer>
      {/* Extra fun frog in the corner */}
      <img src={frogusCardImg} alt="Frogus Mini" className="fixed bottom-4 right-4 w-16 h-16 opacity-80 z-20 animate-bounce" />
    </div>
  );
};

export default Index;

// Add CSS for matrix animation in index.css or a global style file.
