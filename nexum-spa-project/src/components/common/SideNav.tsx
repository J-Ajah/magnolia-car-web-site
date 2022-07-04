import React, { useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { EditableArea } from "@magnolia/react-editor";
import Scroll from "./Scroll";
import HoriLine from "./HoriLine";

type Props = {
  sideNavigationTitle: string;
};

const SideNav: React.FC<Props> = (props) => {
  return (
    <div className="sideNav bg-[#F3F4F6] !w-[200px] border-t-2  h-[100vh]  top-[20px] z-30 pt-5">
      <div className="text-center mb-1 text-[16px] font-bold  tracking-wider antialiased">
        {props.sideNavigationTitle}
        <HoriLine />
      </div>

      <div className="border-1 border-[#e9e7e7] h-[100vh]  space-y-3 ">
        {props["navLinks"] && (
          <EditableArea
            className="navLinks flex flex-wrap"
            key="navLinks"
            content={props["navLinks"]}
          />
        )}
      </div>
      <Scroll />
    </div>
  );
};

export default SideNav;
