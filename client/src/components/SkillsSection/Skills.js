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
      className={`min-h-screen bg-gradient-to-b from-[#14213d] to-[#264653] relative overflow-hidden
        ${isAndroid ? "pt-[calc(50vh)]" : ""}
        ${isIphone ? "pt-[calc(55vh)]" : ""}`} // Работаем с паддингами для Android и iPhone
    >
      {/* Компонент для отображения информации */}
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />

      {/* Картинка с навыками */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 bottom-[200px] transform -translate-x-1/2 object-contain"
        style={{
          width: "950px",
          height: "900px",
          pointerEvents: "none",
        }}
      />

      {/* Облако навыков с пузырями */}
      <SkillCloud showInfo={showInfo} />
    </section>
  );
}

export default Skills;
























