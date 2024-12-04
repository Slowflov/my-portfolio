import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const actualWidth = window.innerWidth;
      console.log("Window resized to:", actualWidth); // Логируем изменяющуюся ширину
      setWidth(actualWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("Final width inside hook:", width); // Лог текущей ширины экрана внутри хука

  return width;
};

export default useWindowWidth;










