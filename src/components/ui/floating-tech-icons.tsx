import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

export const FloatingTechIcons = () => {
  const techIcons = [
    { Icon: SiReact, color: '#61DAFB', name: 'React' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { Icon: SiPython, color: '#3776AB', name: 'Python' },
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: SiCss3, color: '#1572B6', name: 'CSS3' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {techIcons.map(({ Icon, color, name }, index) => (
        <motion.div
          key={name}
          className="absolute opacity-20 hover:opacity-40 transition-opacity"
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <Icon 
            size={40 + (index % 3) * 10} 
            style={{ color }}
            className="drop-shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};