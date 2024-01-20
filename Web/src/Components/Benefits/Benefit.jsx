import React from "react";

const Benefit = ({
  description,
  description2,
  description3,
  Icon20,
  Icon21,
  Icon22,
}) => {
  return (
    <div className="flex flex-col  m-10 gap-5 font-sans">
      <div className="flex items-center">
        <img src={Icon20} alt="Icon" className="w-20" />
        <div className="ml-4 text-gray-800">{description}</div>
      </div>
      <div className="flex items-center">
        <img src={Icon21} alt="Icon" className="w-20" />
        <div className="ml-4 text-gray-800">{description2}</div>
      </div>
      <div className="flex items-center">
        <img src={Icon22} alt="Icon" className="w-20" />
        <div className="ml-4 text-gray-800">{description3}</div>
      </div>
    </div>
  );
};

export default Benefit;
