import { motion } from 'framer-motion';

export const DNAHelix = () => {
  const createHelixPoints = (count: number) => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 4; // 4 full rotations
      const x = Math.cos(angle) * 100;
      const y = (i / count) * 800 - 400; // Spread vertically
      const z = Math.sin(angle) * 100;
      points.push({ x, y, z, angle });
    }
    return points;
  };

  const helixPoints = createHelixPoints(40);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
      <div className="relative w-96 h-96">
        {/* First Helix */}
        {helixPoints.map((point, index) => (
          <motion.div
            key={`helix1-${index}`}
            className="absolute w-3 h-3 bg-primary-500 rounded-full blur-sm"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [point.x, point.x * Math.cos(0.02), point.x],
              y: [point.y, point.y * 0.8, point.y],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}

        {/* Second Helix (offset by 180 degrees) */}
        {helixPoints.map((point, index) => (
          <motion.div
            key={`helix2-${index}`}
            className="absolute w-3 h-3 bg-primary-300 rounded-full blur-sm"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [-point.x, -point.x * Math.cos(0.02), -point.x],
              y: [point.y, point.y * 0.8, point.y],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1 + 0.05,
            }}
          />
        ))}

        {/* Connecting Lines */}
        {helixPoints.slice(0, -1).map((_, index) => (
          <motion.div
            key={`connection-${index}`}
            className="absolute w-px h-8 bg-gradient-to-b from-primary-400 to-transparent origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              rotate: [0, 360],
              scaleY: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          />
        ))}

        {/* Central Core */}
        <motion.div
          className="absolute w-1 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-600 opacity-30"
          style={{
            left: '50%',
            top: '10%',
            height: '80%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scaleY: [0.8, 1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};