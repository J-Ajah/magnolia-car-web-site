import { EditableArea } from "@magnolia/react-editor";
import React from "react";
import Posts from "./Posts";


type Props ={
   "Posts Area": {},
   caption: string;
}

export const FooterPosts:React.FC<Props> = (props: Props) => {
  return (
    <div className="relative z-50 text-white w-[80%] mx-auto mt-14 ml-12">
      <div>
        <p className="caption w-[50%]">{props.caption}</p>
        <div
          className="mt-1 border-t-[2px] border-[tomato]
            w-[10%]"
        ></div>
      </div>
      <div className="mt-2 space-y-5">
      {/* Posts Area */}

      {
        props["Posts Area"] && (
          <EditableArea className="PostsArea" key="Posts Area" content={props["Posts Area"]} />
        )
      }
      </div>
    </div>
  );
};
