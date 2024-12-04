import React from "react";
import SkillBubble from "./SkillBubble"; // Компонент пузыря с навыками
import useWindowWidth from "../hook/useWindowWidth";

const SkillCloud = ({ showInfo }) => {
  const screenWidth = useWindowWidth();

  console.log("SkillCloud Current screen width:", screenWidth); // Лог текущей ширины экрана в SkillCloud

  const getPosition = (position) => {
    console.log("Checking screen width in getPosition:", screenWidth); // Проверка ширины внутри getPosition
    if (screenWidth >= 1024) return position.lg;
    if (screenWidth >= 768) return position.md;
    if (screenWidth >= 640) return position.sm;
    return position.xs;
  };

  const skills = [
    { name: "React", level: 12, size: "large", position: { lg: { top: "11%", left: "78%" }, md: { top: "11%", left: "78%" }, sm: { top: "9%", left: "74%" }, xs: { top: "15%", left: "66%" } }},
    { name: "HTML", level: 18, size: "small", position: { lg: { top: "29%", left: "69%" }, md: { top: "29%", left: "69%" }, sm: { top: "20%", left: "54%" }, xs: { top: "14%", left: "28%" } }},
    { name: "CSS", level: 14, size: "medium", position: { lg: { top: "45%", left: "14%" }, md: { top: "45%", left: "14%" }, sm: { top: "37%", left: "17%" }, xs: { top: "54%", left: "23%" } }},
    { name: "JavaScript", level: 11, size: "large", position: { lg: { top: "38%", right: "42%" }, md: { top: "38%", right: "42%" }, sm: { top: "39%", right: "38%" }, xs: { top: "39%", right: "45%" } }},
    { name: "Redux", level: 12, size: "small", position: { lg: { bottom: "39%", left: "75%" }, md: { bottom: "50%", left: "81%" }, sm: { bottom: "38%", left: "28%" }, xs: { bottom: "21%", left: "64%" } }},
    { name: "Node.js", level: 10, size: "medium", position: { lg: { bottom: "36%", right: "49%" }, md: { bottom: "33%", right: "36%" }, sm: { bottom: "21%", right: "38%" }, xs: { bottom: "24%", right: "51%" } }},
    { name: "Tailwind", level: 12, size: "medium", position: { lg: { top: "73%", right: "26%" }, md: { top: "73%", right: "20%" }, sm: { top: "33%", right: "3%" }, xs: { bottom: "30%", right: "24%" } }},
    { name: "Sass", level: 16, size: "small", position: { lg: { bottom: "13%", left: "40%" }, md: { bottom: "12%", left: "37%" }, sm: { bottom: "9%", left: "64%" }, xs: { bottom: "15%", left: "47%" } }},
    { name: "MongoDB", level: 15, size: "small", position: { lg: { top: "82%", right: "74%" }, md: { top: "82%", right: "74%" }, sm: { top: "52%", right: "12%" }, xs: { top: "89%", right: "12%" } }},
    { name: "Rest API", level: 13, size: "medium", position: { lg: { bottom: "75%", right: "40%" }, md: {bottom: "75%", right: "42%" }, sm: { bottom: "24%", right: "9%" }, xs: { bottom: "42%", right: "23%" } }},
    { name: "Git", level: 11, size: "medium", position: { lg: { top: "9%", left: "21%" }, md: { top: "9%", left: "21%" }, sm: { top: "8%", left: "21%" }, xs: { top: "31%", left: "65%" } }},
    { name: "Postman", level: 14, size: "small", position: { lg: { bottom: "30%", left: "26%" }, md: { bottom: "30%", left: "22%" }, sm: { bottom: "20%", left: "15%" }, xs: { bottom: "49%", left: "76%" } }},
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
          />
        );
      })}
    </>
  );
};

export default SkillCloud;







