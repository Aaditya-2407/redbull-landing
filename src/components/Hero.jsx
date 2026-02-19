import { motion } from 'framer-motion';
import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

const Hero = () => {
  const bgColor = useMemo(() => new THREE.Color("grey"), []);
  const smokeColor = useMemo(() => new THREE.Color("#55555"), []);

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center">
      
      {/* NAVBAR */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[100] flex justify-between items-center px-12 py-6 backdrop-blur-2xl bg-black/[0.03] rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <img src="/redbull_logo-removebg-preview.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-black">
          <a href="#about" className="hover:opacity-50 transition-all">Story</a>
          <a href="#flavors" className="hover:opacity-50 transition-all">Editions</a>
          <a href="#contact" className="hover:opacity-50 transition-all">Explore</a>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1">Shop Now</button>
      </nav>

      {/* LIGHTING */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40"
           style={{ background: 'radial-gradient(circle at 0% 100%, #FF0D11 25%, transparent 65%)' }} />
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60"
           style={{ background: 'radial-gradient(circle at 100% 0%, #001A5E 25%, transparent 60%)' }} />

      {/* SMOKE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ fov: 75, position: [0, 0, 600], far: 6000 }} scene={{ background: bgColor }}>
          <Suspense fallback={null}>
            <Smoke color={smokeColor} density={35} enableRotation={true} speed={0.12} />
          </Suspense>
        </Canvas>
      </div>

      {/*THE CAN  */}
    
      <div className="absolute -left-60 -bottom-32 md:-left-[350px] md:-bottom-[240px] z-40 pointer-events-none">
        <motion.div
          initial={{ y: 500, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: 18 }} // Reduced rotation slightly for better alignment
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="/redbull_canjpeg-removebg-preview.png" 
            alt="Red Bull" 
            className="w-[1000px] md:w-[1400px] h-auto drop-shadow-[80px_80px_150px_rgba(0,0,0,0.15)]" 
          />
        </motion.div>
      </div>

      {/* THE ABOUT BOX */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-30 w-[95%] md:w-[850px]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="backdrop-blur-3xl bg-black/[0.04] p-10 md:p-20 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
        >
          <h1 className="text-6xl md:text-[8.5rem] font-black text-black italic uppercase leading-[0.75] mb-10 tracking-tighter">
            Red Bull Gives <br/> 
            W<span className="text-[#FF0D11]">iii</span>ngs.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-black/5 pt-10">
            <p className="text-black/80 text-sm md:text-xl font-bold leading-tight uppercase italic tracking-tight">
              The drink is not just any normal drink it's adranaline and aw<span className="text-[#FF0D11]">eee</span>somness in a can.
            </p>
            
            <div className="flex flex-col gap-6 md:pl-8 md:border-l border-black/10">
               <div>
                  <span className="block text-4xl font-black italic">80MG</span>
                  <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest">Caffeine / 250ml</span>
               </div>
               <div>
                  <span className="block text-4xl font-black italic">VIT B</span>
                  <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest">Niacin & B6</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;