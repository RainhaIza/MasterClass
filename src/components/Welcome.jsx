import React from 'react';

export default function Welcome({ aoComecar }) {
  return (
    <div className="text-center animate-in fade-in duration-700">

      <h1 className="text-3xl md:text-4xl font-black mb-4 text-slate-800 leading-tight">
        Diagnostico: Você é uma <span className="text-rose-600">mulher marcante?</span>
      </h1>

      <p className="text-slate-500 mb-8 max-w-lg mx-auto leading-relaxed font-medium">
        Descubra em 30 segundos porque as pessoas te esquecem tão fácil, te usam e vão embora. E receba a ajuda, imediatamente, através da minha masterclass com tudo que eu usei para ser pedida em casamento em apenas 15 dias
      </p>
      

      <div className="relative max-w-sm mx-auto mb-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.01]">
        <img 
  src="/IzaeNoivo.jpeg" 
  alt="Rainha Iza e Noivo" 
  className="w-full h-auto object-cover"
/>
      </div>

      {/* Botão CORRIGIDO: Agora na paleta Rosa do site */}
      <button 
        onClick={aoComecar}
        className="w-full md:w-auto bg-rose-600 hover:bg-rose-500 text-white text-xl font-black py-6 px-16 rounded-2xl shadow-[0_20px_50px_rgba(225,29,72,0.2)] transform transition active:scale-95 lowercase tracking-tight"
      >
        começar diagnóstico
      </button>
    </div>
  );
}