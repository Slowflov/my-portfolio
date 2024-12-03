import React, { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiSass, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SkillBubble from "./SkillBubble"; // Компонент пузыря с навыками

function SkillCloud({ showInfo }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPosition = (position) => {
    if (screenWidth >= 1024) return position.lg;
    if (screenWidth >= 768) return position.md;
    if (screenWidth >= 640) return position.sm;
    return position.xs;
  };

  const skills = [
    { name: "React", level: 12, size: "large", position: { lg: { top: "11%", left: "78%" }, md: { top: "11%", left: "78%" }, sm: { top: "12%", left: "72%" }, xs: { top: "9%", left: "66%" } }, icon: <FaReact className="text-5xl text-blue-400" /> },
    { name: "HTML", level: 18, size: "small", position: { lg: { top: "15%", left: "63%" }, md: { top: "15%", left: "63%" }, sm: { top: "15%", left: "63%" }, xs: { top: "15%", left: "78%" } }, icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS", level: 14, size: "medium", position: { lg: { top: "45%", left: "14%" }, md: { top: "37%", left: "14%" }, sm: { top: "23%", left: "17%" }, xs: { top: "53%", left: "70%" } }, icon: <FaCss3Alt className="text-5xl text-blue-600" /> },
    { name: "JavaScript", level: 11, size: "large", position: { lg: { top: "2%", right: "-45%" }, md: { top: "17%", right: "-60%" }, sm: { top: "8%", right: "-48%" }, xs: { top: "12%", right: "-59%" } }, icon: <FaJsSquare className="text-5xl text-yellow-500" /> },
    { name: "Redux", level: 12, size: "small", position: { lg: { bottom: "-4%", left: "34%" }, md: { bottom: "-4%", left: "34%" }, sm: { bottom: "-18%", left: "35%" }, xs: { bottom: "-18%", left: "26%" } }, icon: <SiRedux className="text-5xl text-purple-500" /> },
    { name: "Node.js", level: 10, size: "medium", position: { lg: { bottom: "-6%", right: "-49%" }, md: { bottom: "-22%", right: "-14%" }, sm: { bottom: "-5%", right: "-54%" }, xs: { bottom: "8%", right: "-25%" } }, icon: <FaNodeJs className="text-5xl text-green-500" /> },
    { name: "Tailwind", level: 12, size: "medium", position: { lg: { top: "-22%", right: "-83%" }, md: { top: "-22%", right: "-83%" }, sm: { top: "-22%", right: "-77%" }, xs: { bottom: "-25%", right: "-26%" } }, icon: <SiTailwindcss className="text-5xl text-teal-400" /> },
    { name: "Sass", level: 16, size: "small", position: { lg: { bottom: "2%", left: "40%" }, md: { bottom: "4%", left: "37%" }, sm: { bottom: "1%", left: "50%" }, xs: { bottom: "15%", left: "47%" } }, icon: <SiSass className="text-5xl text-pink-400" /> },
    { name: "MongoDB", level: 15, size: "small", position: { lg: { top: "-12%", right: "-87%" }, md: { top: "-6%", right: "-67%" }, sm: { top: "-22%", right: "-17%" }, xs: { top: "9%", right: "-67%" } }, icon: <SiMongodb className="text-5xl text-green-600" /> },
    { name: "Rest API", level: 13, size: "medium", position: { lg: { bottom: "86%", right: "-40%" }, md: { bottom: "92%", right: "-40%" }, sm: { bottom: "94%", right: "-44%" }, xs: { bottom: "15%", right: "-37%" } }, icon: <TbApi className="text-5xl text-gray-500" /> },
    { name: "Git", level: 11, size: "medium", position: { lg: { top: "-93%", left: "25%" }, md: { top: "-99%", left: "20%" }, sm: { top: "-102%", left: "18%" }, xs: { top: "-88%", left: "25%" } }, icon: <FaGithub className="text-5xl text-black" /> },
    { name: "Postman", level: 14, size: "small", position: { lg: { bottom: "59%", left: "70%" }, md: { bottom: "50%", left: "81%" }, sm: { bottom: "56%", left: "82%" }, xs: { bottom: "49%", left: "76%" } }, icon: <TbApi className="text-5xl text-orange-500" /> },
  ];

  return (
    <>
      {skills.map((skill, index) => {
        const position = getPosition(skill.position);
        return (
          <SkillBubble
            key={index}
            skill={skill.name}
            level={skill.level}
            size={skill.size}
            style={position}
            syntaxName={skill.name}
            showInfo={showInfo}
            icon={skill.icon}
          />
        );
      })}
    </>
  );
}

export default SkillCloud;






