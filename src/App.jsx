import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Depoimentos from './components/Depoimentos';
import TopicosAula from './components/TopicosAula';
import { XCircle } from 'lucide-react';

function App() {
  // Controle de etapa: welcome -> quiz -> depoimentos -> landing
  const [etapa, setEtapa] = useState('welcome');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100">
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* TELA 1: WELCOME */}
        {etapa === 'welcome' && (
          <Welcome aoComecar={() => setEtapa('quiz')} />
        )}

        {/* TELA 2: QUIZ - Título em Preto Sólido conforme solicitado */}
        {etapa === 'quiz' && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 leading-tight">
              Diagnóstico: Você é uma mulher marcante?
            </h1>
            <Quiz aoFinalizar={() => setEtapa('depoimentos')} />
          </div>
        )}

        {/* TELA INTERMEDIÁRIA: DEPOIMENTOS (PONTE DE PROVA SOCIAL) */}
        {etapa === 'depoimentos' && (
          <div className="animate-in fade-in zoom-in duration-700 text-center">
            <Depoimentos />
            <button 
              onClick={() => setEtapa('landing')}
              className="mt-8 w-full md:w-auto bg-rose-600 hover:bg-rose-500 text-white text-xl font-black py-6 px-16 rounded-2xl shadow-xl transform transition active:scale-95 uppercase"
            >
              Ver meu resultado e solução
            </button>
          </div>
        )}

        {/* TELA 3: LANDING PAGE (OFERTA FINAL) */}
        {etapa === 'landing' && (
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            {/* O Timer aparece apenas na revelação da oferta */}
            <Timer /> 

            <div className="text-center mb-12 mt-8">
              <h1 className="text-3xl md:text-6xl font-black leading-tight mb-6 text-slate-900">
                Minha masterclass vai te transformar em uma mulher <span className="text-rose-600">sexy com poder e controle</span> em 7 dias
              </h1>
              
              {/* Seção de Dores para reforçar a necessidade da solução */}
              <div className="flex flex-col items-center gap-4 mb-10 text-left max-w-lg mx-auto bg-rose-50 p-6 rounded-2xl border border-rose-100 font-medium">
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

              {/* Player de Vídeo VSL (9:16) */}
              <div className="max-w-[350px] mx-auto mb-12">
                <div className="relative aspect-[9/16] bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-200 shadow-2xl">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/3dPmtxqRDEk?rel=0" 
                    title="Masterclass Rainha Iza"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-4 text-slate-400 text-[10px] uppercase tracking-widest font-bold">Toque para iniciar a aula</p>
              </div>

              {/* COMPONENTE COMPLETO: Agora contém Títulos, Tópicos, Foto e FAQ */}
              <TopicosAula />

            </div>

            <footer className="mt-20 py-12 border-t border-slate-100 text-center bg-slate-50">
              <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-4">
                © 2026 Rainha Iza - Todos os direitos reservados
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Desenvolvido por <span className="font-bold text-rose-600">Danz Souza</span>
              </p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
