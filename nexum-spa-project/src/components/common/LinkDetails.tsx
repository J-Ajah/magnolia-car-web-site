import { MdDoubleArrow } from "react-icons/md";

type Props = {};

export const LinkDetails: React.FC<Props> = (props) => {
  console.log("Value of props is: ",props)
  return (
    <div className="relative z-50 text-white w-[80%] mx-auto mt-14 ml-12 xl:flex xl:flex-wrap  xl:flex-start
    xl:align-top justify-evenly xl:content-start ">
      <div className="xl:w-[80%] h-fit">
        <p className="caption w-[50%]">USEFUL LINKS</p>
        <div
          className="mt-1 border-t-[2px] border-[tomato]
            w-[10%]"
        ></div>
      </div>
      <div className="mt-2 xl:w-[80%] space-y-2 w-[100%]">
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9] cursor-pointer">Homepage</p>
        </div>
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" /> 
          <p className="text-[#f1f5f9] cursor-pointer">Showroom</p>
        </div>
        <div className="flex space-x-2">
          <MdDoubleArrow className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9] cursor-pointer">About</p>
        </div>
      </div>
    </div>
  );
};
