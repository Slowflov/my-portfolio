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
  className="absolute top-[5px] right-10 xxs:right-12 p-1 rounded-full bg-[#8d99ae] text-white flex items-center justify-center"
  onClick={onClick}
  style={{ width: "41px", height: "20px", zIndex: 40 }}
>
  <div
    className={`w-5 h-5 bg-[#5a189a] rounded-full transition-transform duration-300 ${
      showInfo ? "transform translate-x-[12px]" : "transform translate-x-[-10.8px]"
    }`}
  ></div>
</button>

    </div>
  );
  
  export default SkillInfo;
  