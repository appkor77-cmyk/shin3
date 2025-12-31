import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import GameBar from './components/GameBar';
import QuickLinks from './components/QuickLinks';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero3D />
        <GameBar />
        <QuickLinks />
        <NewsSection />
        <VideoSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;