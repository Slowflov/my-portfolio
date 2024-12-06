import React, { useState } from "react";
import SkillInfo from "./SkillInfo"; // Компонент с информацией
import SkillCloud from "./SkillCloud"; // Новый компонент для облака навыков
import MySkills from "../../assets/skills.png";  // Путь к картинке

function Skills() {
  const [showInfo, setShowInfo] = useState(false); // Состояние для отображения панели

  const handleButtonClick = () => {
    setShowInfo(prev => !prev); // Меняем состояние отображения панели
  };

  return (
    <section
      id="skills"
      className="h-screen bg-gradient-to-b from-[#14213d] to-[#264653] relative overflow-hidden"
    >
      {/* Компонент для отображения информации */}
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />

      {/* Картинка с навыками */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 bottom-[200px] transform -translate-x-1/2 object-contain"
        style={{ width: "950px", height: "900px", pointerEvents: "none" }}
      />

      {/* Облако навыков с пузырями */}
      <SkillCloud showInfo={showInfo} />
    </section>
  );
}

export default Skills;






















