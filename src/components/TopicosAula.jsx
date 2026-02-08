import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const lista = [
  "Vício no seu sexo", "Vício em você", "O que eu faço com meu desejo sexual?",
  "Sexo descontrolado: o que você está fazendo?", "Ciclo do vício sexual",
  "Desejo é poder", "Fantasia na fala", "Mente sexual"
];

export default function TopicosAula() {
  return (

    <div className="bg-rose-50/50 rounded-3xl p-6 md:p-10 border border-rose-100 my-12 shadow-sm">
      <h3 className="text-xl md:text-2xl font-black mb-8 text-center text-slate-800 italic">
        Saiba o que vamos falar na nossa aula:
      </h3>
      <div className="grid md:grid-cols-2 gap-4 text-left">
        {lista.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-200/50 shadow-sm transition-transform hover:scale-[1.02]">
            <CheckCircle2 size={20} className="text-rose-500 shrink-0" />
            <span className="text-slate-700 text-sm md:text-base font-semibold">
              {index + 1}- {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}