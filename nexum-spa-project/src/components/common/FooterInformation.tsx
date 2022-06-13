import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";

type Props = {
  serviceSum: string;
  location: string;
  email: string;
};
export const FooterInformation = (props: Props) => {
  console.log(props);
  return (
    <div className="relative text-[#efecec] mx-auto w-[80%] z-40 mt-14 ml-12 gap-4">
      <p>{props.serviceSum}</p>
      <div className="mt-5">
        <div className="flex space-x-2 gap-2">
          <MdLocationPin className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9]">{props.location}</p>
        </div>
        <div className="flex space-x-2">
          <MdEmail className="text-[tomato] mt-1" />
          <p className="text-[#f1f5f9]">{props.email}</p>
        </div>
      </div>
    </div>
  );
};
