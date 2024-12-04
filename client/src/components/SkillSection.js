import React from "react";
import Bubble from "./Bubble";

const skills = [
  {
    id: 1,
    position: {
      custom: { left: "220px", top: "120px" },
      lg: { left: "200px", top: "100px" },
      md: { left: "150px", top: "80px" },
      sm: { left: "100px", top: "60px" },
      xs: { left: "50px", top: "40px" },
    },
  },
  {
    id: 2,
    position: {
      custom: { left: "320px", top: "150px" },
      lg: { left: "280px", top: "120px" },
      md: { left: "200px", top: "90px" },
      sm: { left: "120px", top: "70px" },
      xs: { left: "60px", top: "50px" },
    },
  },
];

const SkillSection = () => {
  return (
    <div className="relative h-screen w-full">
      {skills.map((skill) => (
        <Bubble key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillSection;

