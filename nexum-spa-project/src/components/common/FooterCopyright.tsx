import { EditableArea } from "@magnolia/react-editor";
import Link from "next/link";

type Props = {
  // icons?: {};
  // data?: {
  //   facebookImg?: {};
  //   twitterImg?: {};
  //   instagramImg?: {};
  // };
  content?: {
    privacyTermsArea?: {};
    rightArea?: {};
    socialIconsArea?: {};
  };
};
const footerCopyright: React.FC<Props> = ({ content }) => {
  const hostUrl = process.env["NEXT_PUBLIC_MGNL_HOST"];

  const { socialIconsArea, rightArea, privacyTermsArea } = content;
  let isPageEditable: boolean;


  if (typeof window !== "undefined") {
    // Client-side-only code
    isPageEditable = window.location.search.includes("mgnlPreview");
  }
  return (
    <div
      className="relative rightArea text-white text-sm px-10 pb-10 space-y-6
     md:pb-20 md:mt-5 md:space-y-0 md:flex md:flex-wrap md:justify-around
     lg:text-lg lg:mt-4"
    >
      {(socialIconsArea["@nodes"].length > 0 || isPageEditable) && (
        <div className="relative socialIcons z-50 flex justify-start mt-4 md:mt-0  justify-center space-x-4">
          <EditableArea
            key="socialIconsArea"
            className="footerDefault flex flex-wrap relative socialIcons z-50  justify-start mt-4 md:mt-0  justify-center space-x-4"
            content={socialIconsArea}
          />
        </div>
      )}

      <div className="copyright-div">
        {rightArea["@nodes"].length < 1 && (
          <p className="relative z-50 text-center   md:relative  lg:text-[16px] lg:w-[100%]">
            {" "}
            &copy;Copyright
          </p>
        )}

        {rightArea && (
          <EditableArea
            key="rightArea"
            className="footerDefault default justify-center flex-wrap"
            content={rightArea}
          />
        )}
      </div>

      {(privacyTermsArea["@nodes"].length > 0 || isPageEditable) && (
        <div
          className="relative privacy-conditions lg:relative lg:top-2  flex flex-wrap 
          justify-center z-50 md:mt-1 lg:text-[16px]"
        >
          <EditableArea
            key="privacyTermsArea"
            className="footerDefault flex flex-wrap"
            content={privacyTermsArea}
          />
        </div>
      )}
    </div>
  );
};

export default footerCopyright;
