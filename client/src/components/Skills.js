import React, { useState } from "react";
import SkillBubble from "./SkillBubble";
import SkillInfo from "./SkillInfo"; // Импортируем новый компонент
import MySkills from "../assets/skills.png";  // Путь к вашей картинке

function Skills() {
  const [showInfo, setShowInfo] = useState(false); // Состояние для отображения панели

  const handleButtonClick = () => {
    setShowInfo(prev => !prev); // Меняем состояние отображения панели
  };

  const skills = [
    { name: "React", level: 12, size: "large", position: { top: "11%", left: "75%" } },
    { name: "HTML", level: 18, size: "small", position: { top: "31%", left: "63%" } },
    { name: "CSS", level: 14, size: "medium", position: { top: "60%", left: "28%" } },
    { name: "JavaScript", level: 11, size: "large", position: { top: "48%", right: "45%" } },
    { name: "Redux", level: 12, size: "small", position: { bottom: "44%", left: "15%" } },
    { name: "Node.js", level: 10, size: "medium", position: { bottom: "12%", right: "29%" } },
    { name: "Tailwind", level: 12, size: "medium", position: { top: "48%", right: "13%" } },
    { name: "Sass", level: 16, size: "small", position: { bottom: "10%", left: "40%" } },
    { name: "MongoDB", level: 15, size: "small", position: { top: "75%", right: "74%" } },
    { name: "Rest API", level: 13, size: "medium", position: { bottom: "62%", right: "50%" } },
    { name: "Git", level: 11, size: "medium", position: { top: "15%", left: "20%" } },
    { name: "Postman", level: 14, size: "small", position: { bottom: "30%", left: "70%" } },
  ];

  return (
    <section
      id="skills"
      className="h-screen bg-gradient-to-b from-[#14213d] to-[#751dda] relative"
    >
      {/* Используем новый компонент */}
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />
      
      {/* Картинка */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 bottom-[200px] transform -translate-x-1/2"
        style={{ width: "750px", height: "800px", pointerEvents: "none" }}
      />

      {/* Отображаем пузырьки с навыками */}
      {skills.map((skill, index) => (
        <SkillBubble
          key={index}
          skill={skill.name}
          level={skill.level}
          size={skill.size}
          style={{ ...skill.position, position: "absolute" }}
          syntaxName={skill.name}
          showInfo={showInfo} // Передаем состояние в SkillBubble
        />
      ))}
    </section>
  );
}

export default Skills;




















