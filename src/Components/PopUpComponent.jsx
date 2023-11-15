import React from "react";

const PopUpComponent = ({ emaildata ,close}) => {
  return (
    <div onClick={close} className="h-screen fixed inset-0 top-0 z-20 w-full backdrop-blur-xl bg-transparent flex items-center justify-center p-4">
      <div className="w-96 p-5 rounded-lg bg-white text-center">
        <h2 className="sm:text-xl text-black">Thanks For Subscribe our NewsLetter</h2>
        <p className="text-base text-center text-black py-2">your Email : <span className="text-custumBlue font-bold ">{emaildata}</span></p>
      </div>
    </div>
  );
};

export default PopUpComponent;
