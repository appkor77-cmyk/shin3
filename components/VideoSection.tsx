import React from 'react';
import { VIDEO_DATA } from '../constants';
import { Plus, Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4">
            히어로즈 영상
          </h2>
          <button className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors">
            더보기 <Plus size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_DATA.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-video shadow-md mb-4">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                     <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center pl-1 shadow-lg">
                       <Play fill="white" size={18} className="text-white" />
                     </div>
                  </div>
                </div>
                
                {/* Branding Badge */}
                <div className="absolute top-3 right-3">
                   <span className="bg-black/70 text-white text-[10px] px-2 py-1 rounded font-bold tracking-wider">HEROES TV</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-800 leading-snug group-hover:text-red-700 transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;