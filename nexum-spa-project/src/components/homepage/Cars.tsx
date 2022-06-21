import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { getCars } from "./CarListing";

type Props = {
  carName: string;
  carDescription?: string;
  carImage: {};
  carImage1: {};
  carImage2: {};
  carLength: any;
};
export const Cars: React.FC<Props> = (props: Props) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const imageUrl = hostUrl + props.carImage["@link"];
  console.log(props);
  const images = [
    hostUrl + props.carImage["@link"],
    hostUrl + props?.carImage1?.["@link"],
    hostUrl + props?.carImage2?.["@link"],
  ];
  const itemsLength = getCars().length;
  const router = useRouter();

  const [showInfo, setShowInfo] = useState(false);
  let itemWidth: string | number = itemsLength > 4 ? 20 : 25;
  itemWidth = itemWidth + "%";
  // ${itemWidth.toString() === '20%' ? '20%' : "25%"}
  console.log(itemWidth.toString());
  const sendData = () => {
    router.push(
      {
        pathname: `car/${props.carName}`,
        query: {
          name: props.carName,
          description: props.carDescription,
          image: images,
        },
      },
      `car/${props.carName}`
    );
  };
  return (
    <div
      className={'car relative w-[100%] md:w-[50%] ' + (itemWidth === '20%' ?'lg:w-[20%]' : 'lg:w-[25%]') + ' lg:border-2 cursor-pointer hover:transition-all'}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={imageUrl} alt={props.carName} onClick={sendData} />
      {showInfo && (
        <>
          <div
            className="w-[40px] h-[40px] absolute bottom-0 top-[38%]  ml-[55%]
          translate-x-[-100%] border-2 rounded-full bg-[white]"
          >
            <FaCar className="text-[#c72b2b] mx-auto  w-[22px] h-[22px] translate-y-[30%]" />
          </div>
          <div
            className={`bg-[#ca2415]  text-white h-[80px] absolute w-full bottom-0
           lg:h-[${itemWidth.toString() === "20%" ? "50px" : "80px"}]`}
            onClick={sendData}
          >
            <h3
              className={`font-bold text-[15px] text-center mt-5
            w-[250px] mx-auto  lg:mt-3"
            lg:text-[${itemWidth.toString() === "20%" ? "13px" : "20px"}]`
          }
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
