import { motion, AnimatePresence } from 'framer-motion';

const Background = ({ videoSrc, colorTint = "rgba(0, 11, 41, 0.6)" }) => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-rbBlue">
      <AnimatePresence mode="wait">
        <motion.div
          key={videoSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* The Monotone Filter Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ backgroundColor: colorTint, mixBlendMode: 'multiply' }} 
          />
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Background;