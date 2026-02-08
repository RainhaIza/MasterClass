import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Timer() {
  const [seconds, setSeconds] = useState(900); // 15 minutos = 900 segundos

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-rose-100 py-3 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-rose-600 font-bold">
        <Clock size={20} className="animate-pulse" />
        <span className="text-sm md:text-base italic">Resgate agora seu desconto: {formatTime(seconds)}</span>
      </div>
    </div>
  );
}