import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const SpotlightEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Spotlight Following Mouse */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, #ea580c, transparent 70%)',
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Multiple Floating Spotlights */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #f59e0b, transparent 60%)',
        }}
        animate={{
          x: [100, 300, 100],
          y: [100, 200, 100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-15 blur-xl"
        style={{
          background: 'radial-gradient(circle, #c2410c, transparent 50%)',
          right: '20%',
          top: '30%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-20 blur-lg"
        style={{
          background: 'radial-gradient(circle, #fbbf24, transparent 40%)',
          left: '15%',
          bottom: '25%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};