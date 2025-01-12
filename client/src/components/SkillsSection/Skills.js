import React, { useState, useEffect } from "react";
import SkillInfo from "./SkillInfo"; // Компонент с информацией
import SkillCloud from "./SkillCloud"; // Новый компонент для облака навыков
import MySkills from "../../assets/skills.png"; // Путь к картинке

function Skills() {
  const [showInfo, setShowInfo] = useState(false); // Состояние для отображения панели
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [sectionHeight, setSectionHeight] = useState("100vh");

  useEffect(() => {
    // Проверяем, если это Android
    if (/Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
    // Проверяем, если это iPhone
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      setIsIphone(true);
    }

    // Устанавливаем корректную высоту для секции
    const updateHeight = () => {
      setSectionHeight(window.innerHeight + "px");
    };
    window.addEventListener("resize", updateHeight);  // Обновляем высоту при изменении размера экрана
    updateHeight(); // Запускаем сразу при загрузке компонента

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const handleButtonClick = () => {
    setShowInfo((prev) => !prev); // Меняем состояние отображения панели
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#14213d] to-[#264653] relative overflow-hidden flex flex-col items-center justify-start"
      style={{ minHeight: sectionHeight }} // Используем динамическую высоту
    >
      {/* Компонент для отображения информации */}
      <SkillInfo onClick={handleButtonClick} showInfo={showInfo} />

      {/* Картинка с навыками */}
      <img
        src={MySkills}
        alt="A developer with an idea"
        className="absolute left-1/2 transform -translate-x-1/2 object-contain"
        style={{
          width: "950px",
          height: "900px",
          bottom: isAndroid ? "200px" : isIphone ? "180px" : "200px", // Небольшие различия для Android и iPhone
          pointerEvents: "none",
        }}
      />

      {/* Облако навыков с пузырями */}
      <SkillCloud showInfo={showInfo} />
    </section>
  );
}

export default Skills;























