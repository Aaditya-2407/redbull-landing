import { useEffect } from 'react';
import Lenis from 'lenis';
import Background from './components/Background';
import Hero from './components/Hero';
import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative">
      <Background videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" /> 
      {/* Replace URL with a Red Bull sports clip later */}
      
      <div className="relative z-10">
        <Hero />
        {/* We will add Flavors and Adrenaline sections next */}
        <div className="h-screen" /> {/* Spacer for testing scroll */}
      </div>
    </main>
  );
}

export default App;