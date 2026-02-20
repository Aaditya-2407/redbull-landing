import { motion } from 'framer-motion';

const Flavors = () => {
  const svgMask = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDMwMCI+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjQwIiBmb250LXdlaWdodD0iOTAwIiBmb250LWZhbWlseT0nQXJpYWwgQmxhY2ssIEdhZGdldCwgc2Fucy1zZXJpZicgZm9udC1zdHlsZT0iaXRhbGljIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjM1ZW0iIGxldHRlci1zcGFjaW5nPSItMTBweCI+V0lJSU5HUzwvdGV4dD48L3N2Zz4=")`;

  return (
    <section id="flavors" className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 1. THE RED-WASHED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* The Base Grayscale Video */}
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover grayscale contrast-150 brightness-75"
        >
          <source src="/redbull_video.mp4" type="video/mp4" />
        </video>
        
        {/* filter */}
        <div 
          className="absolute inset-0 bg-[#FF0D11] mix-blend-multiply opacity-80" 
          style={{ pointerEvents: 'none' }}
        />
        
        {/* filter */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      </div>

      {/* 2. text layer */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          WebkitMaskImage: svgMask,
          maskImage: svgMask,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: '110%',
          WebkitMaskSize: '110%',
        }}
      >
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/redbull_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3. PRODUCT LAYER (Cans) */}
      <motion.div 
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-5%] z-50 w-full flex justify-center pointer-events-none"
      >
        <img 
          src="/Flavours.png" 
          alt="Red Bull Editions" 
          className="w-[70%] md:w-[50%] h-auto drop-shadow-[0_-50px_100px_rgba(0,0,0,1)]"
        />
      </motion.div>

      {/* gradien */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-[20]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-[20]" />
      
    </section>
  );
};

export default Flavors;