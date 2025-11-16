import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-5 mb-4 overflow-hidden">
      <div
        className="bg-[#D4AF37] h-5 text-xs text-black text-center font-medium leading-5"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
