import { MdLocationPin } from "react-icons/md";

type Props = {
  serviceSum: string;
  location: string;
  email: string;
};
export const FooterInformation = (props: Props) => {
  console.log(props);
  return (
    <div className="text-white z-40 mt-20 px-[15px] border-2 border-[tomato] gap-4">
      <p>{props.serviceSum}</p>
      <div className="mt-5">
      <div className="flex space-x-2">
        <MdLocationPin  className="text-[tomato]"/>
        <p className="relative bottom-[10ppx]">{props.location}</p>
      </div>
      <div className="flex space-x-2">
        <MdLocationPin  className="text-[tomato]"/>
        <p className="relative bottom-[10px]">{props.email}</p>
      </div>

      </div>
    </div>
  );
};
