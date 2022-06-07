import carBg1 from "@/assets/spa1.png";
import carBg2 from "@/assets/spa2.png";
import { AiOutlineCar } from "react-icons/ai";

export const BannerAction = () => {
  return (
    <div className="md:flex lg:justify-center">
      <div
        className="flex bg-[#F6F6F6] justify-end relative h-[330px]  p-5 
      space-y-1 border-2 border-gray-200 md:p-8 md:h-[370px]
      lg:border-l-0  lg:w-[100%] lg:h-[390px]"
      >
        <div className="items-container lg:w-[70%]">
          <div className="space-y-3">
            <h3 className="font-semibold text-1xl text-center md:text-left md:text-[20px] lg:text-[22px]">
              {" "}
              ARE YOU LOOKING FOR A CAR?
            </h3>
            <p className="text-[14px]  md:text-[16px] lg:pr-4">
              Search your car in our inventory and request a quote on the
              vehicle of your choosing.
            </p>
            <AiOutlineCar className="w-[100px] h-[100px] mx-auto opacity-25" />
          </div>
          <div className="absolute  h-[100px] bottom-20">
            <img
              src={carBg1.src}
              alt="car image"
              className="h-[150px] ml-[50%] translate-x-[-35%]  md:h-[170px] md:translate-x-[-50%] lg:ml-[50%] lg:translate-x-[-25%]"
            />
          </div>
        </div>
      </div>

      <div
        className="flex relative bg-[#F1F2F6] h-[330px] p-5 space-y-1 border-2 border-gray-200  md:p-8 md:h-[370px]
        lg:border-r-0 lg:w-[100%] lg:h-[390px]
       "
      >
        <div className="items-container lg:w-[70%] lg:flex lg:justify-left">
          <div className="space-y-1">
            <h3 className="font-semibold text-1xl text-center md:text-left md:text-[20px] lg:text-[22px]">
              {" "}
              DO YOU WANT TO SELL YOUR CAR?
            </h3>
            <p className="text-[14px] md:text-[16px]">
              Request, search your car in our inventory and quote on the vehicle
              of your choosing.
            </p>
            <AiOutlineCar className="w-[100px] h-[100px] mx-auto opacity-25" />
          </div>
          <div className="absolute  h-[100px] bottom-20">
            <img
              src={carBg2.src}
              alt="car image"
              className="h-[150px]  mx-auto md:h-[160px] lg:ml-[50%] lg:translate-x-[-25%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
