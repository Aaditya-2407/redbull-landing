import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Flavors from './components/Flavors'; // 1. Import the new component
import './index.css';

function App() {
  useEffect(() => {
    // 2. Initialize Lenis (This makes the scroll smooth)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // App.jsx
return (
  <div className="flex flex-col w-full">
    <Hero />
    <div className="relative z-50"> {/* Higher Z-index to ensure it sits above Hero canvas */}
      <Flavors />
    </div>
  </div>
);
}

export default App;