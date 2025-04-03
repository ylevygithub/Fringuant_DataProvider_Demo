import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1080,
    height: 720,
  });

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    if (innerWidth >= 1024) {
      setWindowSize({
        width: 575,
        height: 395,
      });
    } else {
      setWindowSize({
        width: innerWidth - 32,
        height: innerHeight - 120,
      });
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;