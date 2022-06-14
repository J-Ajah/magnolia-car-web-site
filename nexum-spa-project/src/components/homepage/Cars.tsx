import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { getCarLength } from "./CarListing";

// FaCar
type Props = {
  carName: string;
  carDescription?: string;
  carImage: {};
  carLength: any;
};
export const Cars: React.FC<Props> = (props: Props) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const imageUrl = hostUrl + props.carImage["@link"];
  const itemsLength = getCarLength().length;

  const [showInfo, setShowInfo] = useState(false);
  let width: number | string = 100 / itemsLength;
  width = width.toString() + "%";
  console.log(width);

  return (
    <div
      className={`relative w-[100%] md:w-[50%] lg:w-[${width}] cursor-pointer hover:transition-all`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={imageUrl} alt={props.carName} />
      {showInfo && (
        <>
          <div
            className="w-[40px] h-[40px] absolute bottom-0 top-[38%]  ml-[55%]
          translate-x-[-100%] border-2 rounded-full bg-[white]"
          >
            <FaCar className="text-[#c72b2b] mx-auto  w-[22px] h-[22px] translate-y-[30%]" />
          </div>
          <div className="bg-[#ca2415]    text-white h-[80px] absolute w-full bottom-0">
            <h3
              className="font-bold text-[15px] text-center  mt-5
            w-[250px] mx-auto"
            >
              {" "}
              {props.carName}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};
