import React from 'react';

interface IntroSceneProps {
  onStart: () => void;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 animate-fade-in">
      <div className="mb-6 p-6 rounded-full bg-amber-900/40 border-2 border-amber-600 shadow-[0_0_30px_rgba(217,119,6,0.3)]">
        <span className="text-6xl filter drop-shadow-lg">🏰</span>
      </div>
      
      <h1 className="font-cinzel text-4xl md:text-6xl text-amber-100 mb-6 drop-shadow-lg font-bold">
        La Búsqueda de la Verdad
      </h1>
      
      <div className="max-w-2xl mx-auto bg-[#fdf6e3] text-[#3f2e18] p-8 rounded shadow-[0_0_0_8px_#5d4037,0_0_20px_rgba(0,0,0,0.5)] transform -rotate-1 transition-transform hover:rotate-0 relative">
        <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-amber-900/20"></div>
        <p className="mb-4 text-lg font-lora leading-relaxed">
          Saludos, valiente erudito. Los sellos antiguos protegen la sabiduría eterna. Solo aquel que conozca las Escrituras y posea agudeza mental podrá abrirlos.
        </p>
        <p className="mb-4 font-lora text-base">
          <strong>Tu Misión:</strong> Resolverás 8 enigmas sagrados. Cada respuesta correcta te otorgará una <span className="font-bold bg-amber-200 px-1 text-amber-900">PALABRA SECRETA</span>.
        </p>
        <p className="font-bold italic text-amber-900 mt-6 font-cinzel text-sm border-t border-amber-900/30 pt-4">
          "No hay pistas para el necio, solo recompensa para el que busca."
        </p>
      </div>

      <button 
        onClick={onStart}
        className="mt-12 group relative px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-600 rounded border-2 border-amber-400 font-cinzel font-bold text-xl tracking-widest shadow-lg transition-all hover:-translate-y-1 hover:shadow-amber-600/50 active:translate-y-0"
      >
        <span className="relative z-10">Comenzar el Viaje</span>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100 rounded"></div>
      </button>
    </div>
  );
};

export default IntroScene;