import { motion } from 'framer-motion';

export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }}>
      {/* Vertical Lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"
          style={{
            left: `${i * 5}%`,
            height: '100%',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`horizontal-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          style={{
            top: `${i * 7}%`,
            width: '100%',
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Moving Highlight Points */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-2 h-2 bg-primary-500 rounded-full blur-sm"
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '100%', '0%'],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};