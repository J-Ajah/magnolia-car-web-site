import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./../../Lottie/110313-under-construction (1).json";


const PageConstruction = () => {
  return (
    <div className="text-lg font-bold py-10">
      <Lottie
       className=""
        loop
        animationData={lottieJson}
        play
        style={{ width: "100%", height: 500, color:'red' }}
      />
    </div>
  );
};

export default PageConstruction;
