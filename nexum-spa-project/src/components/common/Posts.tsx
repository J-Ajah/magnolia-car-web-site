import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { formatDate } from "@/utilities/PageUtilities";

type Props = {
  carImage: {};
  day: string;
  title: string;
};

const Posts: React.FC<Props> = ({ carImage, day, title }) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const imageUrl = hostUrl + carImage["@link"];
  const date = formatDate(day);
  return (
    <div
      className="flex space-x-2 border-b-[1px] border-[#979695] 
  pb-2 mb-3"
    >
      <img className="w-[100px]" src={imageUrl} alt="post1" />
      <div className="pl-3">
        <p className="text-[#f1f5f9] text-[13px] font-semibold">{title}</p>
        <div className="mt-1 flex">
          <BsCalendarDate className="text-[tomato] mt-1" />
          <p className="text-sm text-[12px] ml-2 mt-[2px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
