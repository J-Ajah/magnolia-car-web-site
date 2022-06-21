import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import { BiHelpCircle } from "react-icons/bi";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Details = () => {
  const router = useRouter();
  const data = router.query;
  let images = data?.image as [];

  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <div className="w-[100%]  my-4 lg:flex lg:w-[90%] lg:mx-auto">
      <div className="w-[100%]  lg:w-[65%] ">
        <div>
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={1}
            slidesPerView={1}
            thumbs={{ swiper: activeThumb }}
            grabCursor={true}
            navigation={true}
            className="text-white"
          >
            {images?.map((item: string, key: number) => {
              if (item.includes("undefined")) {
                console.log(true);
                return;
              }

              return (
                <SwiperSlide key={key}>
                  <img
                    className="w-[100%] rounded  h-[300px] md:h-[400px] object-cover lg:h-[600px]"
                    src={item}
                    alt={data.name as string}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-[51%] mx-auto">
          <Swiper
            onSwiper={setActiveThumb}
            spaceBetween={1}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="slider-thumbnail text-white mt-2"
          >
            {images?.map((item: string, key: number) => {
              if (item.includes("undefined")) {
                return;
              }

              return (
                <SwiperSlide
                  key={key}
                  className="!w-[33%] h-[100px] cursor-pointer"
                >
                  <img
                    className="w-[100%] h-[60px] md:h-[90px] lg:h-[100px] xl:h-[120px] object-cover"
                    src={item}
                    alt={data.name as string}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div
        className="mt-7 lg:px-4 lg:pt-5  lg:ml-5 lg:w-[40%] rounded border-[1.5px] pt-4
      lg:mt-0"
      >
        <h1
          className=" text-[18px]  text-center font-bold lg:text-[24px] antialiased
        md:text-[28px]"
        >
          {data.name}
        </h1>
        <p className="text-lg mt-4 w-[80%] md:text-[22px]  mx-auto text-center font-semibold px-4 
        lg:px-0 lg:text-[18px] text-justify">
          {data.description && parser(data.description as string)}
        </p>
        <p className="text-[red] text-[30px] md:text-[35px] font-bold text-center mt-4">
          $19,900.00
        </p>
        <div className="flex border-[1.5px] p-3 w-[80%] justify-center mx-auto mt-4 cursor-pointer">
          <BiHelpCircle className="mt-1 md:mt-[6.5px] text-[20px]" />
          <p className="ml-2 text-[21px]  md:font-semibold">
            Request More Info
          </p>
        </div>
        <div className="bg-[#F2F5FA] px-10 pt-8 pb-8 mt-10">
          <p className="font-semibold text-[20px] md:text-[25px] lg:text-[20px]">
            Specification
          </p>
          <div className="border-b-[2px] border-[red]  w-[15%] md:w-[10%] mt-2"></div>

          <div className="details mt-4 pb-2">
            <div className="flex  justify-between  ">
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Year
              </p>
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                2011
              </p>
            </div>
            <div className="flex  justify-between  ">
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Make
              </p>
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Lexus
              </p>
            </div>
            <div className="flex  justify-between ">
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Model
              </p>
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                RX
              </p>
            </div>
            <div className="flex  justify-between ">
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Condition
              </p>
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Used
              </p>
            </div>
            <div className="flex  justify-between ">
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Transmission
              </p>
              <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                Automatic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
