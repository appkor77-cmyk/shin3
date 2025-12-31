import React from 'react';

const Hero3D: React.FC = () => {
  return (
    <div className="relative w-full h-[85vh] bg-[#fcd4d9] overflow-hidden">
      {/* Background Gradient to blend with Spline if needed, but Spline covers mostly */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none z-10"></div>
      
      {/* Spline Iframe */}
      <iframe 
        src='https://my.spline.design/webdiagram-jIy8lJkKoTC4lsYc71pJ9J0b/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        className="w-full h-full"
        title="Kiwoom Heroes 3D"
      ></iframe>

      {/* Hero Overlay Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none w-full px-4">
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl">
           <span className="text-red-900 font-bold tracking-widest text-sm uppercase">Kiwoom Heroes x Spline</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-xl tracking-tighter mb-6">
          WIN THE <br/><span className="text-red-600">CHAMPIONSHIP</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
          Experience the stadium like never before with our interactive 3D web platform.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
         {[0, 1, 2, 3].map(i => (
             <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white w-6' : 'bg-white/50'}`}></div>
         ))}
      </div>
    </div>
  );
};

export default Hero3D;