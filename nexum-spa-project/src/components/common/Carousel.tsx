import car1 from "@/assets/car1.jpg";
import Image from "next/image";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import { useIsMounted } from "@/utilities/PageUtilities";

type Props = {
  data: sliderData;
};

type sliderData = {
  actionText: string;
  actionText2: string;
  actionText3: string;
  caption: string;
  caption2: string;
  caption3: string;
  description: string;
  description2: string;
  description3: string;
  image: Object;
  image2: Object;
  image3: Object;
};
export const Carousel: React.FC<Props> = ({ data }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isMounted = useIsMounted();
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];

  const sliderData = [
    {
      caption: data.caption,
      description: data.description,
      buttonText: data.actionText,
      image: data.image,
    },
    {
      caption: data.caption2,
      description: data.description2,
      buttonText: data.actionText2,
      image: data.image2,
    },
    {
      caption: data.caption3,
      description: data.description3,
      buttonText: data.actionText3,
      image: data.image3,
    },
  ];

  const sliderLength = sliderData.length;
  let count = useRef(0);

  useEffect(() => {
    setInterval(() => {
      if (isMounted.current) {
        let imagesLength: number = sliderLength - 1;

        if (count.current === imagesLength - 1) {
          setCarouselIndex((prev) => {
            count.current = 0;
            return 0;
          });
        } else {
          setCarouselIndex((prev) => {
            count.current = prev;
            return prev + 1;
          });
        }
      }
    }, 9000);
  }, []);

  // console.log(`${hostUrl}${sliderData[carouselIndex].image[0]}`)
  console.log(`${hostUrl}${sliderData[carouselIndex].image["@link"]}`);
  return (
    <div>
      <div className="carousel w-full h-full">
        <div
          id="item1"
          className=" relative  carousel-item w-full h-64  lg:h-full"
        >
          <Image
            src={`${hostUrl}${sliderData[carouselIndex].image["@link"]}`}
            alt="Simple Image"
            className="rounded-sm object-cover"
            //  layout="intrinsic"
            width="100%"
            height="600px"
          />
          <div
            className="animate__animated animate__fadeInRight absolute text-container  text-gray-300 backdrop-blur-sm 
          bg-black/30  w-[300px] h-fit rounded-lg  left-[50%] translate-x-[-50%] mt-5 md:mt-2 
           md:left-10 md:translate-x-[0] lg:w-[500px] lg:top-16 lg:left-[300px] xl:top-32"
          >
            <div className="relative border-1 border-[tomato] m-2 md:m-5">
              <h3 className="font-semibold text-white text-[18px] text-shadow-lg  lg:text-[24px]">
                {sliderData[carouselIndex].caption}
              </h3>
              <p className="text-[#fffdfd] font-normal text-[15px] mt-2 lg:text-[18px]">
              {sliderData[carouselIndex].description}
              </p>
              <button className="btn !border-0 btn-sm mt-5 lg:mt-10  !bg-[#d6293a]  hover:text-[white] hover:scale-105 lg:btn lg:hover:bg-[#d6293a] lg:rounded-0">
                {sliderData[carouselIndex].buttonText}
              </button>
            </div>
            {/* <h2 className="card-title ">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="">Learn now!</button>
            </div> */}
          </div>
        </div>
        {/* <div id="item2" className="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            className="object-cover w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            className="object-cover w-full"
          />
        </div> */}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className="btn btn-xs hover:bg-white hover:text-black bg-[#d6293a] border-1 border-white"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-xs hover:bg-white hover:text-black bg-[#d6293a] border-1 border-white"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn btn-xs hover:bg-white hover:text-black bg-[#d6293a] border-1 border-white"
        >
          3
        </a>
        <a
          href="#item4"
          className="btn btn-xs hover:bg-white hover:text-black bg-[#d6293a] border-1 border-white"
        >
          4
        </a>
      </div>
    </div>
  );
};
