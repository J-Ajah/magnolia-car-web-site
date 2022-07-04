import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

type Props = {
  sideLinkItem: string;
};
const SideLink = (props: Props) => {
  // console.log("Side Link has been Logged ",props);
  return (
    <div className="text-left  border-[#f0efef] p-1 rounded  cursor-pointer w-[100%]">
       <div className="flex space-x-2 ml-5"> <AiFillCaretRight className="mt-1 " /> <p className="font-medium">{props.sideLinkItem}</p>
       </div>
    </div>
  );
};

export default SideLink;
