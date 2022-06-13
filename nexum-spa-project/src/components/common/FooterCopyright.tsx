import Link from "next/link";

type Props = {
  icons?: {};
  data: {
    facebookImg?: {};
    twitterImg?: {};
    instagramImg?: {};
  };
};
const footerCopyright: React.FC<Props> = ({ data }) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];


  return (
    <div
      className="relative rightArea text-white text-sm px-10 pb-10 space-y-6
     md:pb-20 md:mt-5 md:space-y-0 md:flex md:flex-wrap md:justify-around
     lg:text-lg lg:mt-4"
    >
      <div className="relative socialIcons z-50 flex justify-start mt-4 md:mt-0 flex justify-center space-x-4">
        <Link className="cursor-pointer" href="#">
          <a>
            <img
              className=" w-[35px]"
              src={hostUrl + data?.facebookImg?.["@link"]}
              alt=""
            />
          </a>
        </Link>
        <Link className="cursor-pointer" href="#">
          <a>
            <img
              className=" w-[34px]"
              src={hostUrl + data?.twitterImg?.["@link"]}
              alt=""
            />
          </a>
        </Link>
        <Link className="cursor-pointer" href="#">
          <a>
            <img
              className=" w-[35px]"
              src={hostUrl + data?.instagramImg?.["@link"]}
              alt=""
            />
          </a>
        </Link>
      </div>

      <div
        className="relative privacy-conditions lg:relative lg:top-2  flex flex-wrap 
      justify-center z-50 md:mt-1 lg:text-[16px]"
      >
        <Link href="#" className="cursor-pointer">
          <a>Privacy Policy</a>
        </Link>

        <Link href="#" className="cursor-pointer">
          <a className="ml-4">Terms and Conditions</a>
        </Link>

        <Link href="#" className="cursor-pointer">
          <a className="w-[100%] text-center mt-4">Contact Us</a>
        </Link>
      </div>
      <p className="relative z-50 text-center md:w-[100%]  md:relative md:top-10 lg:text-[16px]">
        {" "}
        &copy;Copyright
      </p>
    </div>
  );
};

export default footerCopyright;
