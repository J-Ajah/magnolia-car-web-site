import { EditableArea } from "@magnolia/react-editor";
import { AiOutlineCar } from "react-icons/ai";

type Props = {
  ctaCaption: string;
  ctaText: string;
};
export const CtaDetails: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <>
      <div className="space-y-1">
        <h3 className="font-semibold text-1xl text-center md:text-left md:text-[20px] lg:text-[22px]">
          {" "}
          {props.ctaCaption}
        </h3>
        <p className="text-[14px] md:text-[16px]">{props.ctaText}</p>
        <AiOutlineCar className="w-[100px] h-[100px] mx-auto opacity-25" />
      </div>
      <div className="items-container lg:w-[70%]">
        {props["ImageArea"] && (
          <EditableArea key="ImageArea" content={props["ImageArea"]} />
        )}
      </div>
    </>
  );
};
