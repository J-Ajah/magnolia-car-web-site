import { BsCalendarDate } from "react-icons/bs";
import car1 from "@/assets/car1.jpg";
import { Button } from "./Button";

export const FooterSubscribe = () => {
  return (
    <div className="text-white w-[80%] mx-auto mt-14 ml-12 pb-10">
      <div>
        <p className="caption w-[60%]">SUBSCRIBE TO OUR NEWS LETTER</p>
        <div
          className="mt-1 border-t-[2px] border-[tomato] 
            w-[10%]"
        ></div>
      </div>
      <div className="mt-2">
        <div className="text">
          <p className="text-[#efecec] xl:pr-5">
            Keep up on our always evolving products features and technology.
            Enter your e-mail and subscribe to our newsletter.
          </p>
        </div>
        <div className="text">
          <input
            type="text"
            placeholder="Enter your Email"
            className="text-[14px] relative block top-3 right-2 text-[#f4f3f3] input input-bordered 
            input-md w-full max-w-xs bg-[rgba(0,0,0,0.2)]"
          />
          <Button  text={"Subscribe"} />
        </div>
      </div>
    </div>
  );
};
