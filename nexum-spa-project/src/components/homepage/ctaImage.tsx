import carBg2 from "@/assets/spa2.png";

type Props = {
  ctaImage: {};
};

export const ctaImage: React.FC<Props> = (props) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const imageUrl = hostUrl + props.ctaImage["@link"];
  console.log(props);
  return (
    <div
      className="absolute border-2 w-full h-[100px] bottom-20"
    >
      <img
        src={imageUrl}
        alt="car image"
        className="h-[150px]  mx-auto md:h-[160px] lg:ml-[50%] lg:translate-x-[-50%]"
      />
    </div>
  );
};
