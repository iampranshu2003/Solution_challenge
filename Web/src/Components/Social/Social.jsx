import React from "react";

const Social = ({text,image,text2,image2}) => {
    return (
      <div className="italic ">
        <div className="flex flex-wrap justify-center place-content-center gap-20 m-5 ">
          <div className="w-1/4 p-5 border-2 rounded-xl">{text}</div>
          <div className="w-1/4 rounded-xl border-2 overflow-hidden">
            <img src={image} alt="image " />
          </div>
        </div>
        <div className="flex flex-wrap justify-center place-content-center align-middle gap-20 m-5 ">
          <div className="w-1/4 rounded-xl border-2 overflow-hidden">
            <img src={image2} alt="image " />
          </div>
          <div className="w-1/4 p-5 border-2 rounded-xl">{text2}</div>
        </div>
      </div>
    );
};

export default Social;
