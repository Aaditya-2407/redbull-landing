import { motion } from 'framer-motion';
import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

const Hero = () => {
  const bgColor = useMemo(() => new THREE.Color("white"), []);
  const smokeColor = useMemo(() => new THREE.Color("#ffffff"), []);

  return (
    <section className="relative w-full h-screen bg-white overflow-visible flex items-center">
      
      {/* 1. DARK FROSTED NAVBAR */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[100] flex justify-between items-center px-12 py-6 backdrop-blur-2xl bg-black/[0.03] rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <div className="flex items-center">
          <img src="/redbull_logo-removebg-preview.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-black">
          <a href="#about" className="hover:opacity-50 transition-all">Story</a>
          <a href="#flavors" className="hover:opacity-50 transition-all">Editions</a>
          <a href="#contact" className="hover:opacity-50 transition-all">Explore</a>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#FF0D11] hover:border-[#FF0D11] transition-all">
            Shop Now
        </button>
      </nav>

      {/* 2. LIGHTING LAYERS (The Top-Right Blue will "Corner" the box) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40"
           style={{ background: 'radial-gradient(circle at 0% 0%, #FF0D11 25%, transparent 65%)' }} />

      <div className="absolute inset-0 z-10 pointer-events-none opacity-60"
           style={{ background: 'radial-gradient(circle at 100% 0%, #001A5E 20%, transparent 60%)' }} />

      {/* 3. THE SMOKE CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ fov: 75, position: [0, 0, 600], far: 6000 }} scene={{ background: bgColor }}>
          <Suspense fallback={null}>
            <Smoke color={smokeColor} density={35} enableRotation={true} rotation={[0, 0, 0.4]} speed={0.12} />
          </Suspense>
        </Canvas>
      </div>

      {/* 4. THE MASSIVE TILTED CAN */}
      <div className="absolute -left-40 -bottom-32 md:-left-64 md:-bottom-64 z-20 pointer-events-none">
        <motion.div
          initial={{ y: 300, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: 15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src="/redbull_canjpeg-removebg-preview.png" alt="Red Bull" className="w-[800px] md:w-[1300px] h-auto drop-shadow-[40px_40px_80px_rgba(0,0,0,0.1)]" />
        </motion.div>
      </div>

      {/* 5. WIDER ABOUT BOX (Widened to 800px) */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-30 w-[95%] md:w-[800px]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="backdrop-blur-3xl bg-black/[0.04] p-10 md:p-20 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-[#EF1417] font-black uppercase tracking-[0.5em] text-[10px] mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#EF1417]"></span> Vitalize Body & Mind
          </h2>
          
          <h1 className="text-6xl md:text-9xl font-black text-black italic uppercase leading-[0.75] mb-10 tracking-tighter">
            Gives <br/> You <br/> Wings.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-black/70 text-sm md:text-lg font-medium leading-relaxed">
              Designed for those who never stop. Whether you're hitting the track or the late-night grind, our formula is engineered to keep you at your peak.
            </p>
            
            {/* NEW CONTENT SECTION: Stats */}
            <div className="flex flex-col gap-6 border-l border-black/10 pl-8">
               <div>
                  <span className="block text-3xl font-black italic">80MG</span>
                  <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest">Caffeine / 250ml</span>
               </div>
               <div>
                  <span className="block text-3xl font-black italic">B-GROUP</span>
                  <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest">Essential Vitamins</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;