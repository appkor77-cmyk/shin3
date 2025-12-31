import React from 'react';
import { GAME_STATS } from '../constants';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

const GameBar: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-6 shadow-2xl relative z-30 -mt-10 mx-4 md:mx-12 rounded-xl border border-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-8 lg:gap-0">
        
        {/* Left: Ranking */}
        <div className="flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-gray-700 pb-6 lg:pb-0 lg:pr-12 w-full lg:w-auto justify-center lg:justify-start">
          <div className="relative">
            <svg width="80" height="90" viewBox="0 0 100 110" fill="none" className="drop-shadow-lg">
              <path d="M0 0H100V85L50 110L0 85V0Z" fill="url(#goldGradient)" />
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#AA8E26" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-900 pb-2">
              <span className="text-4xl font-black">10</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">Ranking</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">47 승 93 패 4 무</div>
            <div className="text-gray-400 text-sm">연속 5패 / 승률 0.336</div>
          </div>
        </div>

        {/* Center: Scoreboard */}
        <div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:px-20">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft className="text-gray-400" />
            </button>
            
            <div className="flex items-center gap-4 md:gap-12">
               {/* Away Team */}
               <div className="text-center">
                  <div className="text-gray-400 text-xs mb-2 text-right">{GAME_STATS.pitcherAway}</div>
                  <div className="flex items-center gap-3">
                     <span className="text-2xl font-bold text-gray-300">LANDERS</span>
                     <span className="text-5xl font-black font-mono">{GAME_STATS.awayScore}</span>
                  </div>
               </div>

               <div className="flex flex-col items-center px-4">
                  <span className="text-xs text-orange-400 font-bold border border-orange-400 px-2 py-0.5 rounded mb-2">경기 종료</span>
                  <span className="text-2xl font-bold text-gray-500">:</span>
                  <span className="text-xs text-gray-500 mt-1 whitespace-nowrap">{GAME_STATS.date}</span>
               </div>

               {/* Home Team */}
               <div className="text-center">
                  <div className="text-gray-400 text-xs mb-2 text-left">{GAME_STATS.pitcherHome}</div>
                  <div className="flex items-center gap-3">
                     <span className="text-5xl font-black font-mono text-red-500">{GAME_STATS.homeScore}</span>
                     <div className="flex flex-col items-center">
                       <span className="text-2xl font-bold text-red-500">HEROES</span>
                     </div>
                  </div>
               </div>
            </div>

            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight className="text-gray-400" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default GameBar;