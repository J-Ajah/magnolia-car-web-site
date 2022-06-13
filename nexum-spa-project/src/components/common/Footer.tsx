import { EditableArea } from "@magnolia/react-editor";
import FooterCopyright from "./FooterCopyright";

type Props = {
  facebookImg: {};
  facebookLink: string;
  instagramImg: {};
  instagramLink: string;
  twitterImg: {};
  twitterLink: string;
  policyLink: string;
  termsLink: string;
};

const Footer: React.FC<Props> = (props: Props) => {
  console.log(props);
  return (
    <>
      {props["footerArea"] && (
        <EditableArea
          className="footerArea md:grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4"
          key="footerArea"
          content={props["footerArea"]}
        />
      )}

      {/* Copyright Area  */}
      {props["rightArea"] && <FooterCopyright data={props} />}

      <img
        className="absolute top-[70%] right-10 z-50 cursor-pointer 
      hover:scale-150 hover:tansition hover:duration-500
      lg:w-[35px]
      "
        src="/img/scrollToTop.svg"
        alt="scroll to top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior:"smooth"
          });
        }}
      />
    </>
  );
};

export default Footer;
