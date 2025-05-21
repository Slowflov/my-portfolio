import React, { useState } from "react";
import i18n from "../../i18n";

export default function FlipLangButton() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [lang, setLang] = useState(i18n.language || "en");
  const [isSwitching, setIsSwitching] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    if (!isSwitching) {
      setHovered(false);
    }
  };

  const handleClick = () => {
    if (isSwitching) return;

    setIsSwitching(true);
    setHovered(false); // Сброс состояния hovered после клика

    const nextLang = lang === "en" ? "fr" : "en";
    const nextFlipped = !flipped;

    setFlipped(nextFlipped);

    setTimeout(() => {
      i18n.changeLanguage(nextLang);
      setLang(nextLang);
      setIsSwitching(false);
    }, 500);
  };

  const showBack = flipped ^ hovered;

  return (
    <div className="w-full flex justify-end relative">
      <button
        type="button"
        aria-label="Switch language"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        disabled={isSwitching}
        className="absolute w-30 h-10 cursor-pointer select-none font-sans uppercase text-white outline-none right-[210px] xxl:right-[200px] top-[40px] xxl:top-[20px]"
        style={{ perspective: "600px" }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center px-8 text-gray-300 bg-gray-900"
          style={{
            lineHeight: "40px",
            letterSpacing: "1px",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: showBack ? 0 : 1,
            transform: showBack
              ? "translateY(50%) rotateX(90deg)"
              : "translateY(0) rotateX(0deg)",
            transformOrigin: "top center",
            backfaceVisibility: "hidden",
          }}
        >
          EN
        </span>

        <span
          className="absolute inset-0 flex items-center justify-center px-8 text-gray-800 bg-[#cbf3f0]"
          style={{
            lineHeight: "40px",
            letterSpacing: "1px",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: showBack ? 1 : 0,
            transform: showBack
              ? "translateY(0) rotateX(0deg)"
              : "translateY(-50%) rotateX(90deg)",
            transformOrigin: "top center",
            backfaceVisibility: "hidden",
          }}
        >
          FR
        </span>
      </button>
    </div>
  );
}
