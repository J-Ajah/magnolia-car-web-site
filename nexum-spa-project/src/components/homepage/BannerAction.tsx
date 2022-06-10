import carBg1 from "@/assets/spa1.png";
import carBg2 from "@/assets/spa2.png";
import { AiOutlineCar } from "react-icons/ai";
import { CgKeyhole } from "react-icons/cg";
import { EditableArea } from "@magnolia/react-editor";

type Props = {};  
export const BannerAction: React.FC<Props> = (props) => {

  return (
    <div className="md:flex lg:justify-center">
      <div
        className="carActions flex relative bg-[#F6F6F6] justify-center h-[330px]  p-5 
      space-y-1 border-2 border-gray-200 md:p-8 md:h-[370px] md:w-[100%]
      lg:border-l-0  lg:w-[100%] lg:h-[390px]"
      >
        {props["detailsArea"] && (
          <EditableArea key="detailsArea" content={props["detailsArea"]} />
        )}
      </div>

      <div
        className="carActions flex relative justify-center bg-[#F1F2F6]
         h-[330px] p-5 space-y-1 border-2 border-gray-200 
         md:p-8 md:h-[370px] md:w-[100%]
        lg:border-r-0 lg:w-[100%] lg:h-[390px]
        "
      >
        {props["detailsArea"] && (
          <EditableArea key="detailsArea1" content={props["detailsArea1"]} />
        )}
      </div>
    </div>
  );
};
