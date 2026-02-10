import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const lista = [
  "Vício no seu sexo", "Vício em você", "O que eu faço com meu desejo sexual?",
  "Sexo descontrolado: o que você está fazendo?", "Ciclo do vício sexual",
  "Desejo é poder", "Fantasia na fala", "Mente sexual"
];

const perguntasFrequentes = [
  {
    pergunta: "Funciona pra qualquer tipo de relacionamento?",
    resposta: "Funciona sim, Afinal, você tendo esse contato sexual com a pessoa você já consegue aplicar TUDO da magia sexual explicada!"
  },
  {
    pergunta: "Em quanto tempo eu vejo resultado?",
    resposta: "Você consegue começar assim que acessar a masterclass. Você vai aprender e pode colocar em prática já no primeiro encontro sexual com a pessoa. E ela já começa a sentir algo diferente de primeira!"
  },
  {
    pergunta: "Tem mensalidade? E se a aula atualizar, eu pago de novo?",
    resposta: "Não. É pagamento único (R$ 64 reais) e acesso para sempre! Sem mensalidades!"
  }
];

export default function TopicosAula() {
  const [aberto, setAberto] = useState(null);

  const toggleFAQ = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <div className="space-y-12 pb-10">
      {/* 1. HEADLINES */}
      <div className="text-center space-y-4 px-4">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
          Minha masterclass vai transformar você em uma mulher marcante e em 7 dias você vai conseguir aplicar TUDO e entender exatamente porque magia sexual funciona.
        </h2>
        <p className="text-rose-600 font-bold italic text-lg">
          Saiba tudo o que vamos falar na masterclass Sexual
        </p>
      </div>

      {/* 2. BÔNUS EXCLUSIVO + FOTO */}
      <div className="space-y-4 px-4">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl animate-bounce">🎁</span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Bônus exclusivo:
          </h3>
        </div>
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/IzaEntregaveis.jpeg" alt="Treinamentos" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* 3. GRID DE TÓPICOS */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-rose-50/40 rounded-3xl p-6 md:p-10 border border-rose-100/60 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {lista.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100 shadow-sm transition-all hover:scale-[1.01]">
                <CheckCircle2 size={20} className="text-rose-500 shrink-0" />
                <span className="text-slate-700 font-semibold">{index + 1}- {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FAQ ACORDION */}
      <div className="max-w-2xl mx-auto space-y-4 px-4">
        {perguntasFrequentes.map((item, index) => (
          <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left text-slate-900 font-bold"
            >
              <span>{item.pergunta}</span>
              {aberto === index ? <ChevronUp size={20} className="text-rose-500" /> : <ChevronDown size={20} className="text-slate-400" />}
            </button>
            {aberto === index && (
              <div className="p-5 pt-0 text-slate-600 leading-relaxed font-medium">
                {item.resposta}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 5. ANCORAGEM E BOTÃO (CORREÇÃO DE RESPONSIVIDADE DESKTOP E MOBILE) */}
      <div className="max-w-2xl mx-auto text-center pt-12 space-y-10 px-4">
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Tudo isso custaria <span className="text-rose-600">R$ 297,00</span>
          </p>
          <p className="text-2xl md:text-4xl font-black text-slate-900">
            mas hoje vai custar apenas 👇🏾
          </p>
        </div>

        {/* CARD DE PREÇO - USANDO FLEX-ROW PARA NÃO QUEBRAR NO DESKTOP */}
        <div className="bg-[#DCFCE7] border-2 border-[#c2e9dc] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h4 className="text-[#088138] text-2xl md:text-3xl font-black uppercase tracking-tight">
              Plano VITALÍCIO
            </h4>
            
            <div className="bg-[#D1F0DE] w-full md:w-auto px-6 py-5 rounded-3xl border border-[#c2e9dc] shadow-sm md:min-w-[300px]">
              <div className="text-left mb-1">
                <span className="text-[#50A374] text-base md:text-[20px] font-bold uppercase tracking-widest leading-none">78% off</span>
              </div>
              <p className="text-[#088138] text-5xl md:text-5xl font-black italic leading-none">R$ 64,00</p>
              <div className="text-right mt-1">
                <span className="text-[#50A374] text-sm md:text-[20px] font-medium uppercase tracking-tighter italic leading-none">à vista</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÃO ORIGINAL RESTAURADO */}
        <div className="space-y-6">
          <a 
            href="https://pay.kiwify.com.br/0FiueXp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[#f80032] hover:bg-rose-500 text-white text-lg md:text-2xl font-black py-7 md:py-8 px-4 md:px-6 rounded-3xl shadow-[0_20px_50px_rgba(248,0,50,0.4)] transform transition active:scale-95 text-center uppercase leading-tight md:leading-normal min-h-[80px]"
          >
            QUERO ME TORNAR MARCANTE AGORA!
          </a>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
               <CheckCircle2 size={16} className="text-[#00c08b]" /> Compra 100% Segura
            </p>
            <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
               <CheckCircle2 size={16} className="text-[#00c08b]" /> Acesso Imediato
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}