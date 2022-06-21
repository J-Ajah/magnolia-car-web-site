import { MdDoubleArrow } from "react-icons/md";

type Props = {
  caption: string;
  link1: string;
  link2: string;
  link3: string;
};

export const LinkDetails: React.FC<Props> = (props) => {

  return (
    <div className="relative z-50 text-white w-[80%] mx-auto mt-14 ml-12 xl:flex xl:flex-wrap  xl:flex-start
    xl:align-top justify-evenly xl:content-start ">
      <div className="xl:w-[80%] h-fit">
        <p className="caption w-[50%]">{props.caption}</p>
        <div
          className="mt-1 border-t-[2px] border-[tomato]
            w-[10%]"
        ></div>
      </div>
      <div className="mt-2 xl:w-[80%] space-y-2 w-[100%]">
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9] cursor-pointer">{props?.link1}</p>
        </div>
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" /> 
          <p className="text-[#f1f5f9] cursor-pointer">{props?.link2}</p>
        </div>
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9] cursor-pointer">{props?.link3}</p>
        </div>
      </div>
    </div>
  );
};
