type Props = {
  icons?: {};
};
const footerCopyright: React.FC<Props> = () => {
  return (
    <div className="rightArea text-white text-sm px-10 pb-10 space-y-6
     md:pb-20 md:mt-5 md:space-y-0 md:flex md:flex-wrap md:justify-around
     lg:text-lg lg:mt-4">

      <div className="socialIcons flex justify-center">
        [ Social Media Icons ]
      </div>

      <div
        className="privacy-conditions flex flex-wrap 
      justify-center  md:mt-1"
      >
        <p>Privacy Policy</p>
        <p className="ml-4">Terms and Conditions</p>
        <p className="w-[100%] text-center mt-4">Contact Us</p>
      </div>
      <p className="text-center md:w-[100%]  md:relative md:top-10"> &copy;Copyright</p>
    </div>
  );
};

export default footerCopyright;
