import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="sideNav bg-gray-100 !w-[370px]  h-[100vh]  top-[20px] z-30 pt-5">
      <div className="text-center mb-1 text-[16px] font-semibold tracking-wide antialiased">
        Car sections
      </div>

      <div className="border-1 border-[#e9e7e7] h-[100vh] pl-2">
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex ">
          <AiFillCaretRight  className="mt-1"/> <p>Toyota</p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p>Benz</p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p>Honda</p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p>ISUZU </p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p> Infinity</p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p> GMC </p>
        </div>
        <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer  flex">
          <AiFillCaretRight  className="mt-1"/> <p> HYUNDAI </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
