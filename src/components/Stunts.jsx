import { motion } from 'framer-motion';

const Stunts = () => {
  const stuntImages = ['/pic1.png', '/pic2.png', '/pic3.png', '/pic4.png', '/pic5.png'];
  const quantity = stuntImages.length;

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
      
      {/* 1. BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20"
             style={{ background: 'radial-gradient(circle at 15% 85%, #FF0D11 0%, transparent 40%)' }} />
        <div className="absolute inset-0 opacity-30"
             style={{ background: 'radial-gradient(circle at 85% 15%, #001A5E 0%, transparent 40%)' }} />
      </div>

      {/* 2. THE 3D SCENE WRAPPER */}
      <div 
        className="relative w-full h-full flex items-center justify-center" 
        style={{ 
          perspective: '2000px', // Increased perspective for better depth
          transformStyle: 'preserve-3d' 
        }}
      >
        
        {/* THE SLIDER - This needs to hold the cards in a 3D volume */}
        <motion.div 
          className="relative flex items-center justify-center"
          style={{ 
            width: '200px', 
            height: '280px', 
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {stuntImages.map((src, index) => {
            const rotationY = index * (360 / quantity);
            
            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-xl border-2 border-white/80"
                style={{
                  transformStyle: 'preserve-3d',
                  // We use rotateY first, then translateZ to push them out from center
                  transform: `rotateY(${rotationY}deg) translateZ(550px)`,
                  // IMPORTANT: We remove backface-visibility: hidden so we can see them from behind
                }}
              >
                <img src={src} className="w-full h-full object-cover" alt="Stunt" />
              </div>
            );
          })}
        </motion.div>

        {/* 3. THE CAN - Centered exactly at 0 on the Z-axis */}
        <div 
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0px)', // Put it exactly in the middle of the orbit
          }}
        >
          <motion.img 
            src="/sugar_free.png" 
            alt="Sugar Free Can" 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-[250px] md:w-[380px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* 4. BACKGROUND TEXT */}
        <div className="absolute pointer-events-none" style={{ transform: 'translateZ(-600px)' }}>
          <h2 className="text-[10rem] md:text-[18rem] font-black italic uppercase text-black/[0.03] leading-none text-center select-none">
            Sugar <br/> Free
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Stunts;