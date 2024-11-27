import React from "react";
import SkillBubble from "./SkillBubble";
import MySkills from "../assets/skills.png";  // Путь к вашей картинке

function Skills() {
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
      {/* Тексты в левом верхнем углу */}
      <div className="absolute top-12 left-16 text-white">
  <div className="text-sm font-semibold text-purple-800">Skills &lt;/</div>
  <div className="text-md mt-1 text-gray-400">Programming Languages /</div>
  
  {/* Блок с текстом "Management/Hobbies" и бордером по ширине текста */}
  <div className="text-md mt-1 text-gray-400 inline-block">
    <span>Management/Hobbies</span>
    <div className="border-t-[0.5px] border-white mt-4"></div>
  </div>
</div>


      {/* Добавляем картинку */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 bottom-[200px] transform -translate-x-1/2"
        style={{ width: "750px", height: "800px" }} // Размер изображения
      />

      {/* Отображаем пузырьки с навыками */}
      {skills.map((skill, index) => (
        <SkillBubble 
          key={index} 
          skill={skill.name} 
          level={skill.level} 
          size={skill.size}
          style={{ ...skill.position, position: "absolute" }} // Передаём позицию в стиль
        />
      ))}
    </section>
  );
}

export default Skills;














