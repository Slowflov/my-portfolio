const SkillInfo = ({ onClick, showInfo }) => (
    <div className="absolute top-[200px] left-6 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl">
      <div className="text-xl xxs:text-lg font-semibold text-[#c8ced4]">Skills &lt;/</div>
      <div className="text-xl xxs:text-lg mt-2 text-gray-400">Programming Languages /</div>
      <div className="text-xl xxs:text-lg mt-1 text-gray-400 inline-block">
        <span>Management/Hobbies</span>
        <div className="border-t-[0.5px] border-white mt-4"></div>
      </div>
  
      {/* Кнопка для отображения дополнительной информации */}
      <button
  className={`absolute top-[5px] right-10 xxs:right-12 p-1 rounded-full flex items-center justify-center transition-colors duration-300 ${
    showInfo ? "bg-[#5a189a]" : "bg-[#8d99ae]"
  }`}
  onClick={onClick}
  style={{ width: "41px", height: "20px", zIndex: 40 }}
  aria-label="Toggle information panel for skill syntax"
>
  <div
    className={`w-5 h-5 rounded-full transition-transform duration-300 ${
      showInfo
        ? "bg-[#8d99ae] transform translate-x-[12px]"
        : "bg-[#5a189a] transform translate-x-[-10.8px]"
    }`}
  ></div>
</button>



    </div>
  );
  
  export default SkillInfo;
  