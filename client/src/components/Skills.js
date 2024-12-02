import React, { useState } from "react";
import SkillBubble from "./SkillBubble";
import MySkills from "../assets/skills.png";  // Путь к вашей картинке

function Skills() {
  const [showInfo, setShowInfo] = useState(false); // Состояние для отображения панели

  const handleButtonClick = () => {
    setShowInfo(prev => !prev); // Меняем состояние отображения панели
  };

  const skills = [
    { name: "React", level: 8, size: "large", position: { top: "14%", left: "75%" } },
    { name: "HTML", level: 18, size: "small", position: { top: "29%", left: "58%" } },
    { name: "CSS", level: 14, size: "medium", position: { top: "60%", left: "25%" } },
    { name: "JavaScript", level: 11, size: "large", position: { top: "46%", right: "45%" } },
    { name: "Redux", level: 12, size: "small", position: { bottom: "44%", left: "15%" } },
    { name: "Node.js", level: 10, size: "medium", position: { bottom: "12%", right: "25%" } },
    { name: "Tailwind", level: 12, size: "medium", position: { top: "48%", right: "13%" } },
    { name: "Sass", level: 15, size: "small", position: { bottom: "10%", left: "40%" } },
    { name: "MongoDB", level: 11, size: "small", position: { top: "75%", right: "74%" } },
    { name: "Rest API", level: 13, size: "medium", position: { bottom: "64%", right: "53%" } },
  ];

  return (
    <section
      id="skills"
      className="h-screen bg-gradient-to-b from-[#14213d] to-[#751dda] relative"
    >
      <div className="absolute top-12 left-16 text-white">
        <div className="text-sm font-semibold text-purple-800">Skills &lt;/</div>
        <div className="text-md mt-1 text-gray-400">Programming Languages /</div>
        <div className="text-md mt-1 text-gray-400 inline-block">
          <span>Management/Hobbies</span>
          <div className="border-t-[0.5px] border-white mt-4"></div>
        </div>
      </div>

      {/* Картинка */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 bottom-[200px] transform -translate-x-1/2"
        style={{ width: "750px", height: "800px" }}
      />

      {/* Добавляем кнопку для управления панелью */}
      <button
        className="absolute top-10 right-10 p-3 rounded-full bg-blue-500 text-white"
        onClick={handleButtonClick}
      >
        {showInfo ? "Hide Info" : "Show Info"}
      </button>

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


















