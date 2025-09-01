import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [goonMasters, setGoonMasters] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  // Auto-increment counter to simulate other users clicking
  useEffect(() => {
    const interval = setInterval(() => {
      setGoonMasters(prev => prev + Math.floor(Math.random() * 3) + 1); // +1 to +3 randomly
    }, Math.random() * 2000 + 500); // Random interval between 0.5-2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleGoonClick = () => {
    if (!hasClicked) {
      setGoonMasters(prev => prev + 1);
      setHasClicked(true);
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 200);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/80 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Goon Counter */}
      <div className="text-center mb-8">
        <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Goon Masters</div>
        <div className={`text-6xl font-bold text-white transition-all duration-200 ${
          pulseAnimation ? 'scale-110' : 'scale-100'
        }`}>
          {goonMasters.toLocaleString()}
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <img 
          src="/Untitled design - 2025-09-01T183804.796.png" 
          alt="Goonur" 
          className="max-w-md w-full h-auto rounded-lg"
        />
      </div>

      {/* Interactive Buttons */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleGoonClick}
          disabled={hasClicked}
          className={`px-8 py-4 text-black font-bold rounded-full transform transition-all duration-200 shadow-lg ${
            hasClicked 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-200 hover:scale-105'
          }`}
        >
          GOON
        </button>
      </div>
    </div>
  );
}