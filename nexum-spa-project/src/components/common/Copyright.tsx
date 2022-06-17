import React from "react";


type Props ={
    rightCaption?: string;
}
const Copyright: React.FC<Props>=(props: Props)=> {
     
  return (
    <p className=" z-50 text-center md:w-[100%]   relative  lg:text-[16px]">
      {" "}
      &copy;{props.rightCaption}
    </p>
  );
}

export default Copyright;
