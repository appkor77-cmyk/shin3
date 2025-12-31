import React, { useState, useEffect } from 'react';
import { Search, Menu, ShoppingBag, User, X } from 'lucide-react';

const NAV_ITEMS = ['HEROES', 'PLAYERS', 'GAMES', 'STATS', 'STORY', 'FANS', 'TICKET'];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3 text-slate-900' : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
             <span className="font-bold text-white text-xs tracking-tighter text-center leading-none">KW<br/>HEROES</span>
          </div>
          <span className={`text-xl font-black tracking-wider ${isScrolled ? 'text-red-900' : 'text-white'}`}>
            HEROES
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-bold tracking-wide hover:text-red-600 transition-colors relative group py-2`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-xs font-semibold opacity-80 hover:opacity-100">
            <ShoppingBag size={16} /> SHOP
          </button>
          
          <div className={`hidden md:flex items-center pl-2 border-l ${isScrolled ? 'border-slate-300' : 'border-white/30'}`}>
            <div className="flex gap-3 px-3">
              <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white">Y</span>
              <span className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center text-[10px] text-white">I</span>
              <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">F</span>
            </div>
          </div>

          <button className="p-2 hover:bg-black/10 rounded-full transition-colors">
            <Search size={20} />
          </button>
          
          <button 
            className="lg:hidden p-2 hover:bg-black/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 text-slate-900 animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-bold w-full text-center py-2 hover:bg-gray-50 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;