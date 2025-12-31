import React from 'react';
import { QUICK_LINKS } from '../constants';
import { Ticket, MapPin, Instagram, ArrowRight } from 'lucide-react';

const QuickLinks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">히어로즈 바로가기</h2>
        <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUICK_LINKS.map((link) => {
          let Icon = Ticket;
          if (link.iconType === 'instagram') Icon = Instagram;
          if (link.iconType === 'map') Icon = MapPin;

          return (
            <div 
              key={link.id} 
              className={`relative overflow-hidden rounded-2xl h-48 group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${link.gradient}`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                <div>
                   <h3 className="text-2xl font-bold mb-1">{link.title}</h3>
                   <div className="flex items-center gap-1 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {link.subtitle} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                   </div>
                </div>
                
                <div className="self-end p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Icon size={32} className="text-white" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;