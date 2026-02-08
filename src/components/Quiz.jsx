import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: "Quantas vezes as pessoas falaram que você é marcante nos últimos 365 dias?",
    opcoes: ["Nenhuma vez", "1 vez apenas", "De 2 a 3 vezes", "Mais de 04 vezes"]
  },
  {
    pergunta: "Quantas vezes as pessoas te usaram pra sexo e depois te descartaram?",
    opcoes: ["Nenhuma vez", "1 vez apenas", "De 2 a 3 vezes", "Mais de 04 vezes"]
  },
  {
    pergunta: "Você possui um relacionamento hoje?",
    opcoes: ["Sim", "Não"]
  }
];

export default function Quiz({ aoFinalizar }) {
  const [etapa, setEtapa] = useState(0);

  const responder = () => {
    if (etapa < perguntas.length - 1) {
      setEtapa(etapa + 1);
    } else {
      aoFinalizar(); // Libera o acesso ao vídeo/aula
    }
  };

  return (
    /* Alterado para fundo branco com sombra suave e borda delicada */
    <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-2xl mx-auto">
      <div className="mb-6">
        <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">
          Passo {etapa + 1} de 3
        </span>
        <h3 className="text-xl md:text-2xl font-bold mt-2 text-slate-800">
          {perguntas[etapa].pergunta}
        </h3>
      </div>
      <div className="space-y-3">
        {perguntas[etapa].opcoes.map((opcao, i) => (
          <button 
            key={i}
            onClick={responder}
            /* Botões agora com fundo claro (slate-50) e hover em rosa suave */
            className="w-full text-left p-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-medium hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm active:scale-95"
          >
            {opcao}
          </button>
        ))}
      </div>
    </div>
  );
}