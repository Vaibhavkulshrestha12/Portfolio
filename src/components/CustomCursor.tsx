import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState<'normal' | 'opening' | 'shaking' | 'sparkling' | 'closing'>('normal');

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Simple cursor position tracking
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    // Listen for pokeball capture event
    const handleCapture = (event: CustomEvent) => {
      setAnimationState('opening');
      
      // Pokemon-style animation sequence: open → close → shake → red light → sparkle → popup
      setTimeout(() => {
        // After opening, close to capture neko
        setAnimationState('closing');
      }, 1000); // Opening - pokeball top lifts up (1 second)
      
      setTimeout(() => {
        // Now shake the complete closed pokeball
        setAnimationState('shaking');
      }, 2200); // Closing - top comes back down completely (1.2 seconds after opening)
      
      setTimeout(() => {
        // Red light appears in center - Pokemon is captured
        setAnimationState('sparkling');
      }, 4700); // Shaking - complete pokeball shakes (2.5 seconds)
      
      // Trigger popup while sparkles are still showing
      setTimeout(() => {
        if (event.detail.onComplete) {
          event.detail.onComplete();
        }
      }, 5200); // Popup appears 0.5s after sparkles start
      
      setTimeout(() => {
        setAnimationState('normal');
      }, 7000); // Give more time for sparkles to be visible (2.3 seconds of sparkling)
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('pokeball-capture', handleCapture as EventListener);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('pokeball-capture', handleCapture as EventListener);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - 16,
        top: position.y - 16,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* Add CSS animations for pokeball cursor */}
      <style>
        {`
          @keyframes sparkle-twinkle-cursor {
            0%, 100% { 
              opacity: 0; 
              transform: scale(0.3) rotate(0deg); 
            }
            50% { 
              opacity: 1; 
              transform: scale(1) rotate(180deg); 
            }
          }
          
          @keyframes red-light-pulse-cursor {
            0% { 
              filter: drop-shadow(0 0 8px #FF4444) brightness(1);
              transform: scale(1);
            }
            100% { 
              filter: drop-shadow(0 0 16px #FF4444) drop-shadow(0 0 24px #FF0000) brightness(1.5);
              transform: scale(1.1);
            }
          }
        `}
      </style>
      {/* Custom Pokeball Animation - Perfect Implementation */}
      {animationState !== 'normal' ? (
        <div 
          className="pokeball-animation-container"
          style={{
            position: 'relative',
            width: '32px',
            height: '32px'
          }}
        >
          {/* Custom Animated Pokeball */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style={{
              animation: animationState === 'shaking' ? 'pokeball-shake 0.1s infinite alternate' : 'none'
            }}
          >
            {/* Bottom Half - Always stays in place */}
            <path
              d="M 16 31 A 15 15 0 0 1 1 16 L 12 16 A 4 4 0 0 0 20 16 L 31 16 A 15 15 0 0 1 16 31 Z"
              fill="#F7FAFC"
              stroke="#000"
              strokeWidth="1"
            />
            
            {/* Top Half - Lifts up during opening, gradually comes back down during closing */}
            <path
              d="M 16 1 A 15 15 0 0 1 31 16 L 20 16 A 4 4 0 0 0 12 16 L 1 16 A 15 15 0 0 1 16 1 Z"
              fill="#E53E3E"
              stroke="#000"
              strokeWidth="1"
              style={{
                transformOrigin: '16px 16px',
                transform: 
                  animationState === 'opening' ? 'translateY(-12px)' :
                  animationState === 'closing' ? 'translateY(-3px)' :
                  'translateY(0px)', // Normal, shaking, and sparkling states - pokeball is completely closed
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
            
            {/* Middle Band - Stays with bottom half */}
            <rect
              x="1"
              y="14"
              width="30"
              height="4"
              fill="#2D3748"
            />
            
            {/* Center Circle - Stays with bottom half */}
            <circle
              cx="16"
              cy="16"
              r="6"
              fill="#F7FAFC"
              stroke="#2D3748"
              strokeWidth="2"
            />
            
            {/* Center Button - Red light when captured, then golden sparkles */}
            <circle
              cx="16"
              cy="16"
              r="3"
              fill={animationState === 'sparkling' ? '#FF4444' : '#E2E8F0'}
              stroke="#4A5568"
              strokeWidth="1"
              style={{
                filter: animationState === 'sparkling' ? 'drop-shadow(0 0 8px #FF4444)' : 'none',
                animation: animationState === 'sparkling' ? 'red-light-pulse-cursor 0.3s infinite alternate' : 'none'
              }}
            />

            {/* Success Sparkles - Golden sparkles around the pokeball after red light */}
            {animationState === 'sparkling' && (
              <>
                {/* Sparkle 1 - Top Right */}
                <circle
                  cx="26"
                  cy="6"
                  r="1.5"
                  fill="#FFD700"
                  style={{
                    animation: 'sparkle-twinkle-cursor 0.8s infinite alternate',
                    animationDelay: '0.2s'
                  }}
                />
                {/* Sparkle 2 - Top Left */}
                <circle
                  cx="6"
                  cy="6"
                  r="1"
                  fill="#FFA500"
                  style={{
                    animation: 'sparkle-twinkle-cursor 0.8s infinite alternate',
                    animationDelay: '0.4s'
                  }}
                />
                {/* Sparkle 3 - Bottom Right */}
                <circle
                  cx="26"
                  cy="26"
                  r="1.2"
                  fill="#FFFF00"
                  style={{
                    animation: 'sparkle-twinkle-cursor 0.8s infinite alternate',
                    animationDelay: '0.6s'
                  }}
                />
                {/* Sparkle 4 - Bottom Left */}
                <circle
                  cx="6"
                  cy="26"
                  r="0.8"
                  fill="#FFD700"
                  style={{
                    animation: 'sparkle-twinkle-cursor 0.8s infinite alternate',
                    animationDelay: '0.8s'
                  }}
                />
              </>
            )}
            {(animationState === 'opening') && (
              <>
                <defs>
                  <radialGradient id="captureBeam" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.2"/>
                  </radialGradient>
                </defs>
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  fill="url(#captureBeam)"
                  style={{
                    animation: 'capture-pulse 0.5s infinite alternate'
                  }}
                />
              </>
            )}
          </svg>
          
          {/* Sparkles */}
          {animationState === 'sparkling' && (
            <>
              <div style={{
                position: 'absolute',
                top: '-4px',
                left: '8px',
                fontSize: '8px',
                animation: 'sparkle-twinkle 0.6s infinite',
                animationDelay: '0s'
              }}>✨</div>
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '-4px',
                fontSize: '8px',
                animation: 'sparkle-twinkle 0.6s infinite',
                animationDelay: '0.2s'
              }}>✨</div>
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                left: '12px',
                fontSize: '8px',
                animation: 'sparkle-twinkle 0.6s infinite',
                animationDelay: '0.4s'
              }}>✨</div>
            </>
          )}
        </div>
      ) : (
        /* Hardcoded SVG for normal state - commented out as requested but kept for reference */
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Circle Shadow */}
          <circle
            cx="16"
            cy="16"
            r="15"
            fill="#000"
            opacity="0.2"
          />
          
          {/* Top Half (Red) */}
          <path
            d="M 16 1 A 15 15 0 0 1 31 16 L 20 16 A 4 4 0 0 0 12 16 L 1 16 A 15 15 0 0 1 16 1 Z"
            fill="#E53E3E"
            stroke="#000"
            strokeWidth="1"
          />
          
          {/* Bottom Half (White) */}
          <path
            d="M 16 31 A 15 15 0 0 1 1 16 L 12 16 A 4 4 0 0 0 20 16 L 31 16 A 15 15 0 0 1 16 31 Z"
            fill="#F7FAFC"
            stroke="#000"
            strokeWidth="1"
          />
          
          {/* Middle Band */}
          <rect
            x="1"
            y="14"
            width="30"
            height="4"
            fill="#2D3748"
          />
          
          {/* Center Circle (White) */}
          <circle
            cx="16"
            cy="16"
            r="6"
            fill="#F7FAFC"
            stroke="#2D3748"
            strokeWidth="2"
          />
          
          {/* Center Button */}
          <circle
            cx="16"
            cy="16"
            r="3"
            fill="#E2E8F0"
            stroke="#4A5568"
            strokeWidth="1"
          />
          
          {/* Button Highlight */}
          <circle
            cx="15"
            cy="15"
            r="1"
            fill="#F7FAFC"
          />
          
          {/* Top Highlight */}
          <ellipse
            cx="12"
            cy="8"
            rx="4"
            ry="2"
            fill="#FC8181"
            opacity="0.6"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCursor;