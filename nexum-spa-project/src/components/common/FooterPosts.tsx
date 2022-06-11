import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import car1 from "@/assets/car1.jpg";

export const FooterPosts = () => {
  return (
    <div className="text-white w-[80%] mx-auto mt-14 ml-12">
      <div>
        <p className="caption w-[50%]">RECENT POSTS</p>
        <div
          className="mt-1 border-t-[2px] border-[tomato]
            w-[10%]"
        ></div>
      </div>
      <div className="mt-2 space-y-5">
        <div
          className="flex space-x-2 border-b-[1px] border-[#979695] 
        pb-2"
        >
          <img className="w-[100px]" src={car1.src} alt="post1" />
          <div className="pl-3">
            <p className="text-[#f1f5f9] text-[13px] font-semibold">
              Buy your dream car
            </p>
            <div className="mt-1 flex">
              <BsCalendarDate className="text-[tomato] mt-1" />
              <p className="text-sm text-[12px] ml-2 mt-[2px]">17 May, 2022</p>
            </div>
          </div>
        </div>
        <div
          className="flex space-x-2 border-b-[1px] border-[#979695] 
        cursor-pointer pb-2"
        >
          <img className="w-[100px]" src={car1.src} alt="post1" />
          <div className="pl-3">
            <p className="text-[#f1f5f9] text-[13px] font-semibold">
              Buy your dream car
            </p>
            <div className="mt-1 flex">
              <BsCalendarDate className="text-[tomato] mt-1" />
              <p className="text-sm text-[12px] ml-2 mt-[2px]">17 May, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
