import { motion } from 'framer-motion';

export const MorphingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Blob 1 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #ea580c, #f59e0b)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #c2410c, #ea580c)',
          top: '60%',
          right: '10%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-25 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          top: '30%',
          right: '30%',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Smaller accent blobs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-30 blur-xl"
        style={{
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          bottom: '20%',
          left: '20%',
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-20 h-20 rounded-full opacity-40 blur-lg"
        style={{
          background: 'radial-gradient(circle, #ea580c, transparent)',
          top: '80%',
          right: '40%',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};