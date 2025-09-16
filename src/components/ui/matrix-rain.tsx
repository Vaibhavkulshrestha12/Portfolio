import { useEffect, useRef, useCallback } from 'react';

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dropsRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(0);

  // Memoize characters array
  const charsRef = useRef('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'.split(''));

  const draw = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Throttle to ~30fps for better performance
    if (currentTime - lastTimeRef.current < 33) {
      animationRef.current = requestAnimationFrame(draw);
      return;
    }
    lastTimeRef.current = currentTime;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops if needed
    if (dropsRef.current.length !== columns) {
      dropsRef.current = Array.from({ length: columns }, () => 1);
    }

    // Semi-transparent black background for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties - Classic Matrix Green
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    // Draw characters
    const chars = charsRef.current;
    const drops = dropsRef.current;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      // Reset drop to top randomly (less frequent for better performance)
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Use requestAnimationFrame instead of setInterval
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1, width: '100%', height: '100%' }}
    />
  );
};