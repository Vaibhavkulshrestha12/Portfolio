import { useEffect, useRef } from 'react';

interface SpotlightProps {
  className?: string;
}

export const Spotlight = ({ className = '' }: SpotlightProps) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSpotlight = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const rect = spotlightRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        spotlightRef.current.style.setProperty('--x', `${x}px`);
        spotlightRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    document.addEventListener('mousemove', updateSpotlight);
    return () => document.removeEventListener('mousemove', updateSpotlight);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${className}`}
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.06), transparent 40%)`,
      }}
    />
  );
};

export const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardSpotlight = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cardRef.current.style.setProperty('--card-x', `${x}px`);
        cardRef.current.style.setProperty('--card-y', `${y}px`);
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', updateCardSpotlight);
      return () => card.removeEventListener('mousemove', updateCardSpotlight);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(300px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(255, 255, 255, 0.04), transparent 40%)`,
      }}
    >
      {children}
    </div>
  );
};