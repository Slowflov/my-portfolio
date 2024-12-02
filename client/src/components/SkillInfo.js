const SkillInfo = ({ onClick, showInfo }) => (
    <div className="absolute top-[310px] left-[190px] text-white">
      <div className="text-xl font-semibold text-purple-800">Skills &lt;/</div>
      <div className="text-xl mt-2 text-gray-400">Programming Languages /</div>
      <div className="text-xl mt-1 text-gray-400 inline-block">
        <span>Management/Hobbies</span>
        <div className="border-t-[0.5px] border-white mt-4"></div>
      </div>
  
      {/* Кнопка для отображения дополнительной информации */}
      <button
        className="absolute top-[5px] right-10 p-1 rounded-full bg-[#8d99ae] text-white flex items-center justify-center"
        onClick={onClick}
        style={{ width: "43px", height: "20px", zIndex: 40 }}
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
  