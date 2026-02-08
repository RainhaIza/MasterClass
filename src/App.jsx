import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import TopicosAula from './components/TopicosAula';
import { Play, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [fezQuiz, setFezQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100">
      <Timer />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {!fezQuiz ? (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-3xl font-black mb-8 text-slate-800">
              Diagnóstico: Você é uma mulher marcante?
            </h1>
            <Quiz aoFinalizar={() => setFezQuiz(true)} />
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-6xl font-black leading-tight mb-6 text-slate-900">
                Minha masterclass vai te transformar em uma mulher <span className="text-rose-600">sexy com poder e controle</span> em 7 dias
              </h1>
              
              <div className="flex flex-col items-center gap-4 mb-10 text-left max-w-lg mx-auto bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <div className="flex items-start gap-3 text-slate-700">
                  <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base italic leading-relaxed">
                    Chega de ser vista como <span className="text-rose-600 font-bold">"qualquer uma"</span> e ser esquecida logo depois.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base italic leading-relaxed">
                    Chega de ser <span className="text-rose-600 font-bold">usada apenas para sexo</span> e depois descartada.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <XCircle size={20} className="text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base italic leading-relaxed">
                    Chega de não ter o <span className="text-rose-600 font-bold">controle e o poder</span> sobre quem você deseja.
                  </p>
                </div>
              </div>

              {/* VSL VERTICAL - Ajustado para vídeo em pé (9:16) */}
              <div className="max-w-[350px] mx-auto mb-12">
                <div className="relative aspect-[9/16] bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-200 shadow-2xl">
                  {/* Substitua o ID abaixo pelo ID do vídeo que ela te mandar (YouTube Shorts) */}
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/3dPmtxqRDEk?autoplay=0&controls=1&rel=0" 
                    title="Masterclass Rainha Iza"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-4 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                  Toque para iniciar a aula
                </p>
              </div>

              <TopicosAula />

              <div className="mt-12 space-y-6">
                <a 
                  href="https://pay.kiwify.com.br/UoqAF8l?coupon=EUSOUVIP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto bg-rose-600 hover:bg-rose-500 text-white text-xl md:text-2xl font-black py-8 px-16 rounded-2xl shadow-[0_20px_50px_rgba(225,29,72,0.2)] transform transition hover:-translate-y-1 active:scale-95 text-center"
                >
                  QUERO ME TORNAR MARCANTE AGORA!
                </a>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" /> Compra 100% Segura
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" /> Acesso Imediato
                  </span>
                </div>
              </div>
            </div>

            <footer className="mt-20 py-12 border-t border-slate-100 text-center bg-slate-50">
              <div className="max-w-4xl mx-auto px-6">
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-4">
                  © 2026 Rainha Iza - Todos os direitos reservados
                </p>
                <p className="text-slate-500 text-xs font-medium">
                  Desenvolvido por{" "}
                  <a 
                    href="https://wa.me/5585987525404?text=Olá! Vi o site da Rainha Iza e gostaria de um orçamento." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-rose-600 hover:text-rose-700 transition-colors underline decoration-rose-200 underline-offset-4"
                  >
                    Danz Souza
                  </a>
                </p>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;