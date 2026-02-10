import React, { useState } from 'react';

const fotosRelatos = [
  "/relato1.jpeg",
  "/relato2.jpeg",
  "/relato3.jpeg",
  "/relato4.jpeg"
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  const proximo = () => setIndex((prev) => (prev + 1) % fotosRelatos.length);

  return (
    <div className="py-12 bg-white text-center animate-in fade-in duration-700">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
          “Não amiga… <span className="text-rose-600 font-serif italic">Temos que mudar isso…</span>”
        </h2>
        
        <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-medium">
          Essas pessoas já viram e aplicaram tudo que tem na Masterclass e gastaram <span className="text-rose-600 font-bold">MENOS tempo</span> chorando e conseguiram <span className="text-rose-600 font-bold">MAIS resultado</span> que você:
        </p>

        {/* Carrossel Simples e Funcional */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-rose-50 group">
          <img 
            src={fotosRelatos[index]} 
            alt="Relato" 
            className="w-full h-auto transition-opacity duration-500"
          />
          
          <button 
            onClick={proximo}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg text-rose-600 font-bold"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}