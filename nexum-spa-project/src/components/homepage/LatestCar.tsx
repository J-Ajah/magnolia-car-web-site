type Props = {
  name: string;
};

export const LatestCar: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="w-fit text-xl mx-auto h-[100px] mt-[20px] md:h-[200px]  md:mt-20 text-center
    font-bold md:text-1xl lg:text-[28px]"
    >
      <div>
        {props.name}
        <div
          className="h-[0.8px] border-2 border-[red] border-b-0 
       w-[80%] mt-3 relative mx-auto
       "
        ></div>
        <div
          className="h-[0.8px] border-2 border-[red] border-b-0 
       w-[90%] mt-3 relative mx-auto
       "
        ></div>
        <div
          className="h-[0.8px] border-2 border-[red] border-b-0 
       w-[100%] mt-3 relative mx-auto
       "
        ></div>
      </div>
    </div>
  );
};
