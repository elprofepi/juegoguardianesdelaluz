import React, { useState, useEffect } from 'react';
import { LevelData } from '../types';

interface LevelSceneProps {
  level: LevelData;
  onSolve: () => void;
  onNext: () => void;
  isSolved: boolean;
}

const LevelScene: React.FC<LevelSceneProps> = ({ level, onSolve, onNext, isSolved }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  // Reset input when level changes
  useEffect(() => {
    setInputValue('');
    setError(false);
  }, [level]);

  const handleCheck = () => {
    if (inputValue.trim().toLowerCase() === level.answer.toLowerCase()) {
      onSolve();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSolved) {
      handleCheck();
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full gap-6 items-center justify-center animate-fade-in max-w-6xl mx-auto w-full">
      
      {/* Story Scroll */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-14 h-14 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-[#5d4037] z-10 shadow-lg font-cinzel">
          {level.id}
        </div>
        <div className="bg-[#fdf6e3] text-[#3f2e18] p-8 md:p-10 rounded shadow-[0_0_0_8px_#5d4037] relative min-h-[300px] flex flex-col justify-center">
          <div className="absolute top-2 bottom-2 left-6 w-0.5 bg-amber-900/10"></div>
          <h3 className="font-cinzel text-2xl font-bold text-amber-900 mb-6 border-b-2 border-amber-800/20 pb-2 pl-4">
            {level.title}
          </h3>
          <div className="font-lora text-lg leading-relaxed pl-4 space-y-4">
            {/* We render story as markdown-like text in constants, here we just display it */}
            <p dangerouslySetInnerHTML={{ __html: level.story.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-800">$1</strong>') }} />
          </div>
        </div>
      </div>

      {/* Puzzle Interface */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-600 shadow-2xl relative overflow-hidden">
        
        {/* Background Rune Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <span className="text-9xl">☸</span>
        </div>

        <div className={`text-6xl mb-6 transition-all duration-500 ${isSolved ? 'text-green-400 scale-110' : 'text-gray-400'}`}>
          {isSolved ? '🔓' : level.icon}
        </div>

        <h4 className="font-cinzel text-xl text-amber-400 mb-4 tracking-widest uppercase">
          {isSolved ? "Sello Roto" : "Enigma Sagrado"}
        </h4>
        
        {!isSolved ? (
          <>
            <p className="text-center text-gray-200 mb-8 text-xl font-medium font-lora max-w-md">
              {level.question}
            </p>

            <div className="w-full max-w-sm space-y-6 relative z-10">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`w-full p-4 text-center text-xl bg-black/40 border-2 rounded-lg font-cinzel tracking-widest text-amber-300 placeholder-gray-600 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all ${error ? 'border-red-500 animate-shake' : 'border-[#713f12]'}`}
                placeholder="Tu respuesta..." 
                autoComplete="off"
              />
              
              <button 
                onClick={handleCheck}
                className="w-full py-4 bg-gradient-to-r from-amber-700 to-amber-600 border border-amber-400 rounded-lg text-white font-bold font-cinzel tracking-widest text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                ROMPER SELLO
              </button>
            </div>
          </>
        ) : (
          <div className="w-full animate-fade-in relative z-10">
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 border-2 border-green-500 p-6 rounded-lg text-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <p className="text-green-200 text-sm font-bold uppercase tracking-wider mb-2">Has obtenido la palabra:</p>
              <h3 className="font-cinzel text-4xl md:text-5xl text-white font-bold drop-shadow-md tracking-widest my-4">
                {level.secretWord}
              </h3>
              <p className="text-xs text-green-300/80 italic mb-6">(Anótala, la necesitarás al final)</p>
              
              <button 
                onClick={onNext}
                className="bg-white text-green-900 px-8 py-3 rounded-full font-bold font-cinzel hover:bg-green-50 transition-colors shadow-lg flex items-center gap-2 mx-auto"
              >
                Continuar <span>➜</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelScene;