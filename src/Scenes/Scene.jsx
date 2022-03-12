import { useEffect } from "react";
import { FRAME_10 } from "../utils/constants";
import { currentFrame } from "../utils/utility";

const Scene = () => {
  useEffect(() => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = FRAME_10;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.width = window.innerWidth;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  }, []);

  return (
    <div className="body">
      <canvas id="hero-lightpass"></canvas>
    </div>
  );
};

export default Scene;
