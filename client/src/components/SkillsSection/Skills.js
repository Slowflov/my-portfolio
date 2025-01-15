import React, { useState, useEffect } from "react";
import SkillInfo from "./SkillInfo"; // Компонент с информацией
import SkillCloud from "./SkillCloud"; // Новый компонент для облака навыков
import MySkills from "../../assets/skills.png"; // Путь к картинке

function Skills() {
  const [showInfo, setShowInfo] = useState(false); // Состояние для отображения панели
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    // Проверяем, если это Android
    if (/Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
    // Проверяем, если это iPhone
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      setIsIphone(true);
    }
  }, []);

  const handleButtonClick = () => {
    setShowInfo((prev) => !prev); // Меняем состояние отображения панели
  };

  return (
    <section
      id="skills"
      className={`min-h-screen bg-gradient-to-b from-[#14213d] to-[#264653] relative overflow-hidden flex flex-col items-center 
      ${isAndroid ? "android-class" : ""} ${isIphone ? "iphone-class" : ""}`}
    >
      {/* Компонент для отображения информации */}
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />

      {/* Картинка с навыками */}
      <div
        className="relative flex justify-center items-center mb-12 md:mb-16 lg:mb-32"
        style={{ maxHeight: "600px", minHeight: "300px", width: "100%" }}
      >
        <img
          src={MySkills}
          alt="A developer with an idea"
          className="object-contain max-w-full h-auto"
          style={{
            maxWidth: "90%", // максимальная ширина картинки
            maxHeight: "500px", // максимальная высота для ограничения размера
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Облако навыков с пузырями */}
      <SkillCloud showInfo={showInfo} />
    </section>
  );
}

export default Skills;






















