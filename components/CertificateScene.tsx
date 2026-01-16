import React from 'react';

interface CertificateSceneProps {
  onRestart: () => void;
}

const CertificateScene: React.FC<CertificateSceneProps> = ({ onRestart }) => {
  return (
    <div className="flex items-center justify-center h-full p-4 animate-fade-in">
      <div className="bg-[#fdf6e3] text-[#3f2e18] max-w-3xl w-full p-8 md:p-12 shadow-[0_0_0_12px_#5d4037,0_0_50px_rgba(0,0,0,0.8)] transform hover:scale-[1.01] transition-transform duration-700 relative overflow-hidden">
        
        {/* Certificate Border Decorations */}
        <div className="border-[6px] border-double border-amber-900 p-8 h-full relative flex flex-col items-center text-center">
            <div className="absolute top-2 left-2 text-4xl text-amber-900 opacity-50">✥</div>
            <div className="absolute top-2 right-2 text-4xl text-amber-900 opacity-50">✥</div>
            <div className="absolute bottom-2 left-2 text-4xl text-amber-900 opacity-50">✥</div>
            <div className="absolute bottom-2 right-2 text-4xl text-amber-900 opacity-50">✥</div>

            <h3 className="font-cinzel text-4xl md:text-5xl text-amber-900 mb-8 font-bold border-b-2 border-amber-900/20 pb-4 w-full">
              Certificado de Sabiduría
            </h3>
            
            <div className="text-2xl md:text-3xl text-amber-800 font-lora italic mb-8 mx-auto max-w-2xl leading-relaxed">
              "QUIEN BUSCA LA VERDAD ENCUENTRA LA LUZ ETERNA"
            </div>

            <p className="text-lg md:text-xl text-amber-900 mb-10 leading-relaxed font-lora">
              Por haber demostrado conocimiento de las Escrituras, desde el Génesis hasta la Revelación, y haber superado las pruebas de lógica y fe.<br/><br/>
              Se te reconoce oficialmente ante la Orden como:
            </p>
            
            <h2 className="font-cinzel text-3xl md:text-5xl text-amber-700 font-bold mb-12 tracking-widest uppercase decoration-amber-500 underline decoration-4 underline-offset-8">
              Maestro Guardián
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-end w-full px-4 md:px-10 mt-auto gap-8">
                <div className="text-center w-full md:w-auto">
                    <div className="text-sm text-amber-800 uppercase tracking-wider mb-2 font-cinzel">Fecha</div>
                    <div className="text-amber-900 font-bold border-t-2 border-amber-900 pt-1 font-lora">
                      {new Date().toLocaleDateString()}
                    </div>
                </div>
                
                <div className="text-6xl text-amber-900 opacity-20 hidden md:block">⚓</div>
                
                <div className="text-center w-full md:w-auto">
                    <div className="text-sm text-amber-800 uppercase tracking-wider mb-2 font-cinzel">Firma</div>
                    <div className="text-amber-900 font-bold border-t-2 border-amber-900 pt-1 font-cinzel text-lg">
                      El Gran Archivero
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <button 
        onClick={onRestart} 
        className="absolute bottom-4 right-4 text-gray-400 hover:text-white underline font-lora text-sm z-50"
      >
        Reiniciar Aventura
      </button>
    </div>
  );
};

export default CertificateScene;