import { useEffect, useState } from 'react';
import { Fish } from 'lucide-react'; 

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  let moveTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    
    document.body.style.cursor = 'none';
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
     
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(moveTimeout);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) ${isMoving ? 'rotate(10deg)' : 'rotate(0deg)'}`,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
      }}
    >
     
      <Fish size={24} color="#60A5FA" strokeWidth={2} />
    </div>
  );
};

export default CustomCursor;