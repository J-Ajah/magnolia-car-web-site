import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { getCars } from "./CarListing";

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
  const itemsLength = getCars().length;
  const router = useRouter();

  const [showInfo, setShowInfo] = useState(false);
  let width: number | string = 100 / itemsLength;
  width = width.toString() + "%";
 console.log(itemsLength);
//  [${itemsLength > 4 ? 20 : 50}%]
  return (
    <div
      className={`relative w-[100%] md:w-[50%] lg:w-[${itemsLength > 4 ? 20 : 25}%]  lg:border-2 cursor-pointer hover:transition-all`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      onClick = {() =>{
          router.push({
            pathname: `car/${1}`,
            query: {
              name: props.carName,
              description: props.carDescription,
              image:imageUrl
            },
          },`car/${1}`)
      }}
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
