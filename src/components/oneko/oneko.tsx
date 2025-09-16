import { useEffect, useState } from "react";

const Neko = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) return;

    // Don't check sessionStorage - neko should appear on every page reload
    const nekoEl = document.createElement("div");

    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let captureTriggered = false;

    const nekoSpeed = 12;
    
    let lastFrameTimestamp: number | null = null;

    // Pokeball capture animation logic
    const triggerCaptureAnimation = () => {
      if (captureTriggered) return;
      
      captureTriggered = true;
      
      // Hide neko immediately
      nekoEl.style.opacity = '0';
      
      // Trigger cursor pokeball animation by dispatching a custom event
      const captureEvent = new CustomEvent('pokeball-capture', {
        detail: { 
          x: mousePosX, 
          y: mousePosY,
          onComplete: () => {
            // Show success popup after cursor animation
            setTimeout(() => {
              setShowPopup(true);
              
              // Hide popup and set caught state (but don't persist)
              setTimeout(() => {
                setShowPopup(false);
                nekoEl.remove();
              }, 2000);
            }, 3500); // Wait for full cursor animation sequence
          }
        }
      });
      
      window.dispatchEvent(captureEvent);
    };

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    nekoEl.id = "oneko";
    nekoEl.setAttribute("aria-hidden", "true");
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = "0px";
    nekoEl.style.top = "0px";
    nekoEl.style.transform = `translate(${nekoPosX - 16}px, ${nekoPosY - 16}px)`;
    nekoEl.style.zIndex = "9998"; // Just below the cursor
    nekoEl.style.transition = "none"; // Disable any CSS transitions for smoother movement
    nekoEl.style.willChange = "transform"; // Optimize for animations

    
    let nekoFile = "/oneko.gif"; // Correct path for public directory
    nekoEl.style.backgroundImage = `url(${nekoFile})`;

    document.body.appendChild(nekoEl);

    // Add CSS animations for pokeball capture
    const style = document.createElement('style');
    style.setAttribute('data-oneko-styles', 'true');
    style.textContent = `
      @keyframes pokeball-shake {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        25% { transform: translateX(-3px) rotate(-5deg); }
        75% { transform: translateX(3px) rotate(5deg); }
      }
      
      @keyframes pokeball-success {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
      
      @keyframes sparkle-twinkle {
        0%, 100% { 
          opacity: 0; 
          transform: scale(0.3) rotate(0deg); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1) rotate(180deg); 
        }
      }
      
      @keyframes red-light-pulse {
        0% { 
          filter: drop-shadow(0 0 8px #FF4444) brightness(1);
          transform: scale(1);
        }
        100% { 
          filter: drop-shadow(0 0 16px #FF4444) drop-shadow(0 0 24px #FF0000) brightness(1.5);
          transform: scale(1.1);
        }
      }
      
      .pokemon-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10001;
        animation: popup-appear 0.3s ease-out;
        font-family: 'Courier New', monospace;
        image-rendering: pixelated;
      }
      
      .dialog-border {
        background: #f8f8f8;
        border: 4px solid #000;
        border-radius: 0;
        position: relative;
        min-width: 280px;
        min-height: 80px;
        box-shadow: 
          inset -2px -2px 0px #c0c0c0,
          inset 2px 2px 0px #ffffff,
          4px 4px 0px #808080;
      }
      
      .dialog-border::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        border: 2px solid #000;
        pointer-events: none;
      }
      
      /* Decorative corner elements */
      .dialog-border::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        background: #000;
        clip-path: polygon(0 0, 0 100%, 100% 0);
      }
      
      .dialog-content {
        padding: 20px 24px;
        position: relative;
        z-index: 1;
      }
      
      .pokemon-name {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
        text-align: left;
      }
      
      .pokemon-message {
        font-size: 16px;
        color: #000;
        text-align: left;
        font-weight: normal;
      }
      
      @keyframes popup-appear {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }
      }
    `;
    document.head.appendChild(style);

    const mouseMoveHandler = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    const setSprite = (name: string, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      
      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        const availableIdleAnimations = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) availableIdleAnimations.push("scratchWallW");
        if (nekoPosY < 32) availableIdleAnimations.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS");
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchSelf":
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // Collision detection for capture
      if (distance < 20 && !captureTriggered) {
        triggerCaptureAnimation();
        return;
      }

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

   
      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.transform = `translate(${nekoPosX - 16}px, ${nekoPosY - 16}px)`;
    };

    const onAnimationFrame = (timestamp: number) => {
      
      if (!nekoEl.isConnected) {
        return;
      }
      
      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }
      
      
      if (timestamp - lastFrameTimestamp > 99) { // Faster frame rate for smoother movement (16.67ms ≈ 60fps)
        lastFrameTimestamp = timestamp;
        frame();
      }
      
      window.requestAnimationFrame(onAnimationFrame);
    };

    window.requestAnimationFrame(onAnimationFrame);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      if (nekoEl.isConnected) {
        nekoEl.remove();
      }
      // Remove the style element
      const existingStyle = document.querySelector('style[data-oneko-styles]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // Render Pokemon-style popup
  if (showPopup) {
    return (
      <div className="pokemon-dialog">
        <div className="dialog-border">
          <div className="dialog-content">
            <div className="pokemon-name">NEKO</div>
            <div className="pokemon-message">was caught!</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Neko;