

type Props = {
    text: string;
}

export const Button = (props:Props) => {
    console.log(props)
  return (
    <button className="btn !border-0 btn-sm text-[12px] md:text-[14px] lg:text-[16px] mt-5 lg:mt-10  !bg-[#d6293a]  hover:text-[white] hover:scale-105 lg:btn lg:hover:bg-[#d6293a] lg:rounded-0">
      {props.text}
    </button>
  );
};
