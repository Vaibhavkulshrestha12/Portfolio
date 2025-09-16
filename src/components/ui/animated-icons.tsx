import { motion } from 'framer-motion';

export const AnimatedCatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Cat Head */}
      <motion.circle
        cx="16"
        cy="18"
        r="10"
        fill="currentColor"
        opacity="0.8"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Cat Ears */}
      <motion.path
        d="M 8 12 L 12 6 L 16 12 Z"
        fill="currentColor"
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: '12px 9px' }}
      />
      <motion.path
        d="M 16 12 L 20 6 L 24 12 Z"
        fill="currentColor"
        animate={{
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        style={{ transformOrigin: '20px 9px' }}
      />
      
      {/* Inner Ears */}
      <path
        d="M 10 10 L 12 8 L 14 10 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M 18 10 L 20 8 L 22 10 Z"
        fill="currentColor"
        opacity="0.6"
      />
      
      {/* Eyes */}
      <motion.circle
        cx="12"
        cy="16"
        r="2"
        fill="currentColor"
        animate={{
          scaleY: [1, 0.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="20"
        cy="16"
        r="2"
        fill="currentColor"
        animate={{
          scaleY: [1, 0.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Nose */}
      <path
        d="M 16 19 L 15 21 L 17 21 Z"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Mouth */}
      <motion.path
        d="M 16 21 Q 13 23 11 22 M 16 21 Q 19 23 21 22"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
        animate={{
          d: [
            "M 16 21 Q 13 23 11 22 M 16 21 Q 19 23 21 22",
            "M 16 21 Q 13 22 11 21 M 16 21 Q 19 22 21 21",
            "M 16 21 Q 13 23 11 22 M 16 21 Q 19 23 21 22"
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Whiskers */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        <motion.line
          x1="6"
          y1="16"
          x2="10"
          y2="16"
          animate={{
            x1: [6, 5, 6],
            x2: [10, 9, 10],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="6"
          y1="18"
          x2="10"
          y2="18"
          animate={{
            x1: [6, 5, 6],
            x2: [10, 9, 10],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.line
          x1="22"
          y1="16"
          x2="26"
          y2="16"
          animate={{
            x1: [22, 23, 22],
            x2: [26, 27, 26],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="22"
          y1="18"
          x2="26"
          y2="18"
          animate={{
            x1: [22, 23, 22],
            x2: [26, 27, 26],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </g>
    </svg>
  </motion.div>
);

export const AnimatedFishIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Fish Body */}
      <motion.ellipse
        cx="18"
        cy="16"
        rx="10"
        ry="6"
        fill="currentColor"
        opacity="0.8"
        animate={{
          ry: [6, 7, 6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Fish Belly */}
      <ellipse
        cx="18"
        cy="18"
        rx="6"
        ry="3"
        fill="currentColor"
        opacity="0.4"
      />
      
      {/* Fish Tail */}
      <motion.path
        d="M 8 16 L 2 12 L 2 20 Z"
        fill="currentColor"
        animate={{
          x: [-1, 1, -1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Top Fin */}
      <motion.path
        d="M 14 10 L 18 6 L 22 10 Z"
        fill="currentColor"
        opacity="0.7"
        animate={{
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: '18px 10px' }}
      />
      
      {/* Bottom Fin */}
      <path
        d="M 14 22 L 18 26 L 22 22 Z"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Side Fins */}
      <motion.ellipse
        cx="12"
        cy="20"
        rx="2"
        ry="1"
        fill="currentColor"
        opacity="0.6"
        animate={{
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.ellipse
        cx="24"
        cy="20"
        rx="2"
        ry="1"
        fill="currentColor"
        opacity="0.6"
        animate={{
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Eye */}
      <circle
        cx="22"
        cy="14"
        r="2"
        fill="currentColor"
        opacity="0.9"
      />
      <motion.circle
        cx="22"
        cy="14"
        r="1.2"
        fill="white"
        animate={{
          r: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Mouth */}
      <motion.path
        d="M 26 16 Q 28 18 26 17"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        animate={{
          d: [
            "M 26 16 Q 28 18 26 17",
            "M 26 16 Q 28 17 26 18",
            "M 26 16 Q 28 18 26 17"
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Scales */}
      <g opacity="0.3">
        <circle cx="16" cy="14" r="0.5" fill="currentColor" />
        <circle cx="20" cy="16" r="0.5" fill="currentColor" />
        <circle cx="16" cy="18" r="0.5" fill="currentColor" />
      </g>
    </svg>
  </motion.div>
);