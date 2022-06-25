import { EditableArea } from "@magnolia/react-editor";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import { BiHelpCircle } from "react-icons/bi";
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
interface carInfo {
  images?: [];
  name?: string;
  description?: string;
  carName?: string;
  price?: string;
  condition?: string;
  make?: string;
  transmission?: string;
  year?: string;
  model?: string;
}
const Details = () => {
  const url = process.env["NEXT_PUBLIC_MGNL_ENDPOINT_BASE_URL"];
  SwiperCore.use([Autoplay]);
  const router = useRouter();
  const data = router.query;

  const [activeThumb, setActiveThumb] = useState<any>();
  const [carInfo, setcarInfo] = useState<carInfo>();
  const [nav, setNav] = useState();
  const [specification, setSpecification] = useState<carInfo>();
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    const carData = JSON.parse(localStorage.getItem("carInfo"));
    console.log(carData);
    setcarInfo(carData);

    (async () => {
      //gets the nav bar
      const navData = await fetch(`${url}/pages/v1/homepage/navArea`);
      const response = await navData.json();
      setNav(response);

      //gets the extended footer
      const footer1 = await fetch(`${url}/pages/v1/homepage/footer`);
      const footerResponse = await footer1.json();
      setFooter(footerResponse);
    })();

    setSpecification({
      make: carData?.make,
      model: carData?.model,
      year: carData.year,
      transmission: carData?.transmission,
      condition: carData?.condition,
    });
  }, []);

  return (
    <>
      <div>{nav ? <EditableArea key="Area" content={nav} /> : null}</div>
      <div className="mt-10">
        <div className="w-[100%]  my-4 lg:flex lg:w-[90%] lg:mx-auto">
          <div className="w-[100%]  lg:w-[65%] ">
            <div>
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={1}
                loop={true}
                slidesPerView={1}
                thumbs={{ swiper: activeThumb }}
                grabCursor={true}
                navigation={true}
                autoplay={{
                  delay: 5000,
                }}
                className="text-white"
              >
                {carInfo?.images?.map((item: string, key: number) => {
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
                {carInfo?.images?.map((item: string, key: number) => {
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
                        alt={carInfo?.name}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div
            className="mt-7 lg:px-4 lg:pt-5  lg:ml-5 lg:w-[40%] rounded border-[1.5px] pt-4
      lg:mt-0 lg:pb-5"
          >
            <div className="font-semibold cursor-pointer antialiased">
              <Link href="/homepage">
                <a>Homepage </a>
              </Link>
              <span>
                {" "}
                <span className="font-normal">/</span>{" "}
              </span>
              <span>
                Details <span className="font-normal">/</span>
              </span>{" "}
              <span className="font-bold"> {carInfo?.name}</span>
            </div>
            <h1
              className=" text-[18px]  text-center font-bold lg:text-[24px] antialiased
        md:text-[28px]"
            >
              {carInfo?.name}
            </h1>
            <p
              className="text-lg mt-4 w-[80%] md:text-[22px]  mx-auto text-center font-semibold px-4 
        lg:px-0 lg:text-[18px] text-justify"
            >
              {carInfo?.description && parser(carInfo.description.toString())}
            </p>
            <p className="text-[red] text-[30px] md:text-[35px] font-bold text-center mt-4">
              ${carInfo?.price}
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
                {typeof specification !== "undefined" &&
                  Object?.entries(specification).map(([key, val]) => {
                    return (
                      <div className="flex  justify-between  ">
                        <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                          {key[0].toUpperCase() + key.slice(1, key.length)}
                        </p>
                        <p className="font-semibold md:text-[20px] lg:text-[18px] lg:mb-3">
                          {val}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black mt-10 pt-3 px-6">
        {footer ? <EditableArea key="footer-Area" content={footer} /> : null}
      </div>
    </>
  );
};

export default Details;
