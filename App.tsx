import React, { useState } from 'react';
import { LEVELS } from './constants';
import { GameState, PlayerProgress } from './types';
import IntroScene from './components/IntroScene';
import LevelScene from './components/LevelScene';
import FinalScene from './components/FinalScene';
import CertificateScene from './components/CertificateScene';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  
  const [progress, setProgress] = useState<PlayerProgress>({
    currentLevelIndex: 0,
    collectedWords: [],
    isLevelComplete: false
  });

  const currentLevelData = LEVELS[progress.currentLevelIndex];

  const startGame = () => {
    setGameState(GameState.PLAYING);
    setProgress({
      currentLevelIndex: 0,
      collectedWords: [],
      isLevelComplete: false
    });
  };

  const handleLevelSolve = () => {
    setProgress(prev => ({
      ...prev,
      isLevelComplete: true,
      collectedWords: [...prev.collectedWords, currentLevelData.secretWord]
    }));
  };

  const nextLevel = () => {
    const nextIndex = progress.currentLevelIndex + 1;
    
    if (nextIndex < LEVELS.length) {
      setProgress(prev => ({
        ...prev,
        currentLevelIndex: nextIndex,
        isLevelComplete: false
      }));
    } else {
      setGameState(GameState.FINAL_CHALLENGE);
    }
  };

  const handleFinalComplete = () => {
    setGameState(GameState.CERTIFICATE);
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative bg-[#1a1025]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_50%,rgba(76,29,149,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_30%,rgba(217,119,6,0.15)_0%,transparent_50%)]"></div>
      </div>

      {/* Main Container */}
      <main className="flex-grow z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-gray-900/90 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden relative min-h-[700px] flex flex-col backdrop-blur-sm">
          
          {/* Header (Only visible if not intro or certificate) */}
          {gameState !== GameState.INTRO && gameState !== GameState.CERTIFICATE && (
            <header className="bg-black/60 p-4 border-b border-gray-700 flex justify-between items-center z-20">
              <div className="flex items-center gap-3">
                <span className="text-2xl animate-pulse text-amber-500">🕯️</span>
                <h1 className="font-cinzel text-amber-500 font-bold tracking-widest text-lg md:text-xl hidden sm:block">
                  Guardianes de la Luz
                </h1>
              </div>
              
              {/* Progress Gems */}
              <div className="flex gap-1 md:gap-2">
                {LEVELS.map((lvl, idx) => {
                  let statusClass = "bg-gray-700 border-gray-600"; // Locked
                  if (idx < progress.currentLevelIndex) statusClass = "bg-green-500 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]"; // Completed
                  if (idx === progress.currentLevelIndex && gameState === GameState.PLAYING) statusClass = "bg-amber-500 border-amber-300 shadow-[0_0_10px_#fbbf24] scale-125"; // Active

                  return (
                    <div 
                      key={lvl.id} 
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-all duration-300 ${statusClass}`}
                      title={lvl.title}
                    />
                  );
                })}
                 <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-all duration-300 ml-2 ${gameState === GameState.FINAL_CHALLENGE ? 'bg-purple-500 border-purple-300 animate-pulse' : 'bg-gray-800 border-gray-700'}`} />
              </div>
            </header>
          )}

          {/* Content Area */}
          <div className="flex-grow relative overflow-y-auto">
            {gameState === GameState.INTRO && <IntroScene onStart={startGame} />}
            
            {gameState === GameState.PLAYING && (
              <div className="h-full p-4 md:p-8">
                <LevelScene 
                  level={currentLevelData} 
                  isSolved={progress.isLevelComplete} 
                  onSolve={handleLevelSolve} 
                  onNext={nextLevel} 
                />
              </div>
            )}

            {gameState === GameState.FINAL_CHALLENGE && (
              <FinalScene onComplete={handleFinalComplete} />
            )}

            {gameState === GameState.CERTIFICATE && (
              <CertificateScene onRestart={() => setGameState(GameState.INTRO)} />
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;