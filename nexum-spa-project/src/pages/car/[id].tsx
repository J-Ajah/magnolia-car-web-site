import { useEffect } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  { key: "1", image: "/img/car1.jpg" },
  { key: "2", image: "/img/facebook.svg" },
  { key: "3", image: "/img/instagram.svg" },
  { key: "4", image: "/img/twitter.svg" },
];

const Details = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);

  return (
    <div className="flex mx-4 my-4">
      <div className="border-2 rounded w-[70%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          className="text-white"
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.key}
              style={{
                // backgroundImage: `url(${item.image})`,
                width: "100%",
                color: "white",
              }}
            >
              <img
                className="w-[100%] rounded h-[600px] object-cover"
                src={item.image}
                alt={data.name as string}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-4 pt-5 bg-gray-200 ml-5 w-[30%]">
        <h1 className="font-bold text-[28px]">{data.name}</h1>

        <p className="mt-10 font-semibold">Description</p>
        <p className="text-lg mt-4">
          {data.description && parser(data.description as string)}
        </p>
      </div>
    </div>
  );
};

export default Details;
