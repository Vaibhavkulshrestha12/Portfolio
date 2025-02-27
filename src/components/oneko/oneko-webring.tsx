import { useEffect } from "react";

const Neko = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const nekoEl = document.createElement("div");
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;

    
    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.backgroundImage = `url(./oneko.gif)`;
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = "99999";

    document.body.appendChild(nekoEl);

   
    const updateMousePosition = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    document.addEventListener("mousemove", updateMousePosition);


    let frameCount = 0;
    const nekoSpeed = 0;

    
    const animate = () => {
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      
      if (distance > nekoSpeed) {
        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;
      }

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
      frameCount++;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    
    return () => {
      document.body.removeChild(nekoEl);
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return null;
};

export default Neko;
