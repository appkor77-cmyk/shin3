import React from 'react';
import { NEWS_DATA } from '../constants';
import { Plus } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4">
            히어로즈 구단 소식
          </h2>
          <button className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors">
            더보기 <Plus size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_DATA.map((news) => (
            <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {news.tag && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {news.tag}
                  </span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-lg text-slate-800 mb-4 line-clamp-2 leading-snug group-hover:text-red-700 transition-colors">
                  {news.title}
                </h3>
                <span className="text-xs text-gray-400 font-medium">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;