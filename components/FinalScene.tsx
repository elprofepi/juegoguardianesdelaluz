import React, { useState } from 'react';
import { FINAL_PHRASE } from '../constants';

interface FinalSceneProps {
  onComplete: () => void;
}

const FinalScene: React.FC<FinalSceneProps> = ({ onComplete }) => {
  // Initialize state with empty strings for each word
  const [inputs, setInputs] = useState<string[]>(Array(FINAL_PHRASE.length).fill(''));
  const [error, setError] = useState(false);

  const handleChange = (index: number, val: string) => {
    const newInputs = [...inputs];
    newInputs[index] = val;
    setInputs(newInputs);
    setError(false);
  };

  const handleCheck = () => {
    // Compare inputs with FINAL_PHRASE (case insensitive, trimmed)
    const isCorrect = inputs.every((input, index) => 
      input.trim().toUpperCase() === FINAL_PHRASE[index]
    );

    if (isCorrect) {
      onComplete();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 animate-fade-in max-w-4xl mx-auto">
      <div className="text-7xl mb-4 animate-bounce">🧩</div>
      <h2 className="font-cinzel text-4xl text-amber-400 mb-2 font-bold">El Último Portal</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-lora">
        Has reunido las 8 palabras sagradas a través de la historia. Escríbelas en el orden correcto para revelar la Verdad Eterna.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8 bg-gray-800/50 p-6 rounded-xl border border-gray-600">
        {inputs.map((val, idx) => (
          <div key={idx} className="flex flex-col gap-1">
             <label className="text-xs text-amber-500/70 font-cinzel">Palabra {idx + 1}</label>
             <input
              type="text"
              value={val}
              onChange={(e) => handleChange(idx, e.target.value)}
              className={`w-full p-3 rounded bg-black/40 border-2 text-center text-lg font-cinzel text-amber-100 placeholder-gray-700 focus:outline-none focus:border-amber-400 transition-colors uppercase ${error ? 'border-red-500 animate-shake' : 'border-amber-900/50'}`}
              placeholder={`Palabra ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {error && (
        <p className="text-red-400 font-bold text-lg mb-6 animate-shake bg-red-900/20 px-4 py-2 rounded">
          La frase es incorrecta. Revisa tus notas y el orden.
        </p>
      )}

      <button 
        onClick={handleCheck}
        className="px-16 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg text-white font-bold text-xl font-cinzel tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_40px_rgba(251,191,36,0.8)] hover:scale-105 transition-all"
      >
        ABRIR PORTAL
      </button>
    </div>
  );
};

export default FinalScene;