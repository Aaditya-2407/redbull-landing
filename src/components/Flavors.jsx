import { motion } from 'framer-motion';

const Flavors = () => {
  return (
    <section id="flavors" className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. BACKGROUND VIDEO (The Grayscale Layer) */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/redbull_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. THE COLOR-MASKED TEXT */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* We use mix-blend-mode to make the "color" stand out against the grey back */}
        <h1 
          className="text-[12rem] md:text-[22rem] font-black uppercase italic leading-none tracking-tighter select-none relative"
          style={{
            backgroundImage: 'url(/redbull_video.mp4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 0 50px rgba(255,0,0,0.3))' // Adds a red glow to the mask
          }}
        >
          W<span className="text-[#FF0D11]">iii</span>ngs
          
          {/* THE ACTUAL VIDEO MASK */}
          <video 
            autoPlay muted loop playsInline 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ 
              clipPath: 'text', 
              WebkitClipPath: 'text',
              mixBlendMode: 'normal' 
            }}
          >
            <source src="/redbull_video.mp4" type="video/mp4" />
          </video>
        </h1>
      </div>

      {/* 3. THE FLAVOURS LINEUP (Shifted slightly for better layout) */}
      <motion.div 
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[-5%] z-50 w-full flex justify-center"
      >
        <img 
          src="/Flavours.png" 
          alt="Red Bull Flavors" 
          className="w-[90%] md:w-[75%] h-auto drop-shadow-[0_-50px_100px_rgba(0,0,0,1)]"
        />
      </motion.div>

      {/* 4. TOP VIGNETTE (This makes the Navbar readable) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-[5]" />
    </section>
  );
};

export default Flavors;