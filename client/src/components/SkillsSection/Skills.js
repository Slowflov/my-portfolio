// src/components/Skills.js
import React, { useState, useEffect } from "react";
import SkillInfo from "./SkillInfo";
import SkillCloud from "./SkillCloud";
import MySkills from "../../assets/skills.png";
import ButtonText from './ButtonText';
import SkillText from './SkillText';
import ButtonBubble from './ButtonBubble'; 
import ImageBubble from './ImageBubble';

function Skills() {
  const [showInfo, setShowInfo] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [isSkillTextVisible, setIsSkillTextVisible] = useState(false);
  const [isSkillCloudVisible, setIsSkillCloudVisible] = useState(true);
  const [isAlternateBackground, setIsAlternateBackground] = useState(false);

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

  const handleButtonTextClick = () => {
    setIsSkillCloudVisible((prev) => !prev);
    setIsSkillTextVisible((prev) => !prev);
    setIsAlternateBackground((prev) => !prev); // Переключаем фон
  };

  return (
    <section
      id="skills"
      className={`min-h-screen relative overflow-hidden flex flex-col items-center 
      ${isAlternateBackground ? "min-h-screen relative overflow-hidden flex flex-col items-center bg-[radial-gradient(circle_at_top_center,_#264653_0%,_#14213d_40%)]" : "min-h-screen relative overflow-hidden flex flex-col items-center bg-[radial-gradient(ellipse_at_top,_#14213d_50%,_#264653_100%)]"} 
      ${isAndroid ? "android-class" : ""} ${isIphone ? "iphone-class" : ""}`}
    >


<div className=" z-50">
  <ButtonText onClick={handleButtonTextClick} />
</div>

      {isSkillCloudVisible && (
        <>
          <ButtonBubble onClick={handleButtonClick} showInfo={showInfo} />
          <SkillCloud showInfo={showInfo} />
          <ImageBubble src={MySkills} alt="A developer with an idea" />
          <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />
        </>
      )}

      {isSkillTextVisible && (
        <div >
          <SkillText />
        </div>
      )}
    </section>
  );
}

export default Skills;




























