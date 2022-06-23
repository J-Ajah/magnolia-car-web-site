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
  carLength: number;
  price: string;
  condition: string;
  make: string;
  transmission: string;
  year: string;
  model: string;
  specification: Object;
};
export const Cars: React.FC<Props> = (props: Props) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const imageUrl = hostUrl + props.carImage["@link"];
  const images = [
    hostUrl + props.carImage["@link"],
    hostUrl + props?.carImage1?.["@link"],
    hostUrl + props?.carImage2?.["@link"],
  ];
  const itemsLength = getCars().length;
  const router = useRouter();

  const [showInfo, setShowInfo] = useState(false);
  let itemWidth: number | string = 100 / itemsLength;

  // @ts-ignore
  itemWidth = Math.floor(parseInt(itemWidth)) + "%";
  // ${itemWidth.toString() === '20%' ? '20%' : "25%"}
  console.log(itemWidth);
  const sendData = () => {
    const carInfo = {
      name: props.carName,
      description: props.carDescription,
      images: images,
      price: props?.price,
      year: props.year,
      make: props.make,
      condition: props.condition,
      model: props.model,
      transmission: props.transmission,
    };

    localStorage.setItem("carInfo", JSON.stringify(carInfo));
    router.push(
      {
        pathname: `homepage/details/${props.carName}`,
      },
      `homepage/details?${props.carName}`
    );
  };

  return (
    <div
      className={
        "car relative w-[100%] md:w-[50%] " +
        (itemWidth === "25%" ? "lg:w-[25%] " : "") +
        (itemWidth === "20%" ? "lg:w-[20%] " : "") +
        (itemWidth === "33%" ? "lg:w-[33%] " : "") +
        (itemWidth === "50%" ? "lg:w-[50%]" : "") +
        " lg:border-2 cursor-pointer hover:transition-all"
      }
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
              className={
                "font-bold text-[15px] text-center mt-5 w-[250px] mx-auto " +
                (itemWidth === "20%"
                  ? "lg:text-[15px]  lg:mt-[20px]"
                  : "text-[16px]") +
                " lg:mt-5"
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
