import React, { useState, useEffect } from "react";
import SkillInfo from "./SkillInfo";
import SkillCloud from "./SkillCloud";
import MySkills from "../../assets/skills.png";

function Skills() {
  const [showInfo, setShowInfo] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    if (/Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      setIsIphone(true);
    }
  }, []);

  const handleButtonClick = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <section
      id="skills"
      className={`min-h-screen bg-gradient-to-b from-[#14213d] to-[#264653] relative overflow-hidden flex flex-col items-center 
      ${isAndroid ? "android-class" : ""} ${isIphone ? "iphone-class" : ""}`}
    >
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />

      <div className="flex justify-center items-center min-h-screen pointer-events-none object-contain max-w-[110%] sm:max-w-[90%]">
  <img
    src={MySkills}
    alt="A developer with an idea"
  />
</div>

      <SkillCloud showInfo={showInfo} />
    </section>
  );
}

export default Skills;






















