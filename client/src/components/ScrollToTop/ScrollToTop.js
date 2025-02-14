import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#14213d] to-[#c8ced4] text-white shadow-lg hover:scale-110 hover:opacity-100 opacity-50 transition-transform duration-300"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
