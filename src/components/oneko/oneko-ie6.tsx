import { useEffect } from "react";

const Neko = () => {
  useEffect(() => {
    const nekoEl = document.createElement("div");
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleAnimationFrame = 0; 
    let direction = "";
    const nekoSpeed = 0;
    const idleTimeThreshold = 100; 

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "absolute";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.backgroundImage = "url('oneko.gif')";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = "1000";
    document.body.appendChild(nekoEl);

    const mouseMoveHandler = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY - 16;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    const setSprite = (name: string, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const frame = () => {
      frameCount++;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      
      if (distance < nekoSpeed || distance < 48) {
         if (frameCount % idleTimeThreshold === 0) {
          idleAnimationFrame++;
        }
        setSprite("idle", idleAnimationFrame); 
        return;
      }

     
      idleAnimationFrame = 0;
      direction = "";
      if (diffY / distance > 0.5) direction = "N";
      else if (diffY / distance < -0.5) direction = "S";
      if (diffX / distance > 0.5) direction += "W";
      else if (diffX / distance < -0.5) direction += "E";
      setSprite(direction, frameCount);

      
      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };

    const interval = setInterval(frame, 120); // Slower for better performance

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", mouseMoveHandler);
      nekoEl.remove();
    };
  }, []);

  return null;
};

export default Neko;
