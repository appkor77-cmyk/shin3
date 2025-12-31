import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

const SPONSORS = ['키움증권', 'Herbalife', '동광제약', 'JimBeam', 'Panasonic', 'flex', '하이트진로', 'NAVER'];

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Top Footer with CTA */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <img 
           src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
           alt="Stadium Background" 
           className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay z-0"
        />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">All about KIWOOM HEROES</h2>
            <p className="text-gray-400">히어로즈의 다양한 채널과 함께하세요.</p>
          </div>
          
          <div className="flex gap-4">
             {[
               { Icon: Youtube, color: 'bg-red-600' }, 
               { Icon: Instagram, color: 'bg-gradient-to-br from-purple-500 to-pink-500' }, 
               { Icon: Facebook, color: 'bg-blue-600' }
             ].map((item, idx) => (
               <a 
                 key={idx} 
                 href="#" 
                 className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
               >
                 <item.Icon size={28} />
               </a>
             ))}
          </div>
        </div>
      </div>

      {/* Sponsors Strip */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {SPONSORS.map((sponsor) => (
               <span key={sponsor} className="text-xl font-bold text-slate-800 font-sans tracking-tight hover:text-red-700 cursor-default">
                 {sponsor}
               </span>
             ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="bg-black text-gray-500 py-12 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex flex-wrap gap-4 mb-4 text-gray-300 font-medium">
              <a href="#" className="hover:text-white">개인정보처리방침</a>
              <a href="#" className="hover:text-white">이용약관</a>
              <a href="#" className="hover:text-white">이메일무단수집거부</a>
              <a href="#" className="hover:text-white">안내 및 Q&A</a>
              <a href="#" className="hover:text-white">사이트맵</a>
            </div>
            <p className="leading-relaxed text-xs text-gray-600">
              서울특별시 구로구 경인로 430(고척동, 고척스카이돔구장내) T.02-3660-1000 F.02-3660-1099<br/>
              Copyright (C) Heroes, All Rights Reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
             <h3 className="text-white font-bold tracking-widest text-lg opacity-30">KIWOOM HEROES</h3>
             <span className="text-[10px] uppercase tracking-widest opacity-30">Professional Baseball Club</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;