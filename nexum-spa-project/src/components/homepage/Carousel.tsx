import car1 from "@/assets/car1.jpg";
import car from "@/assets/car3.jpg";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import { useIsMounted } from "@/utilities/PageUtilities";
import { EditableArea } from "@magnolia/react-editor";
import { Button } from "@/components/common/Button";

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
  CTAArea?: {};
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

  const staticImage = [car1, car, car1];

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

  return (
    <div>
      <div className="carousel w-full h-full">
        <div
          id="item1"
          className=" relative  carousel-item w-full h-64  md:h-80 lg:h-full"
        >
          <img
            src={`${hostUrl}${sliderData[carouselIndex].image["@link"]}`}
            alt="Simple Image"
            className="rounded-sm object-cover w-full lg:h-[400px] xl:h-[600px]"
          />
          <div
            className=" absolute text-container  text-gray-300 backdrop-blur-sm 
          bg-black/30  w-[300px] h-fit rounded-lg  left-[50%] translate-x-[-50%] mt-5 md:mt-[5%]
           md:left-10 md:translate-x-[0] lg:w-[500px] lg:top-[5%] lg:left-[10%] xl:top-[10%]"
          >
            <div className="relative border-1 border-[tomato] m-2 md:m-5">
              <h3 className="font-semibold text-white text-[18px] text-shadow-lg  lg:text-[24px]">
                {sliderData[carouselIndex].caption}
              </h3>
              <p className="text-[#fffdfd] font-normal text-[15px] mt-2 lg:text-[18px]">
                {sliderData[carouselIndex].description}
              </p>
              {/* <button className="btn !border-0 btn-sm mt-5 lg:mt-10  !bg-[#d6293a]  hover:text-[white] hover:scale-105 lg:btn lg:hover:bg-[#d6293a] lg:rounded-0">
                {sliderData[carouselIndex].buttonText}
              </button> */}
              <Button text={sliderData[carouselIndex].buttonText} />
            </div>
          </div>
        </div>
      </div>
      {data.CTAArea && <EditableArea key="CTAArea" content={data.CTAArea} />}
    </div>
  );
};
