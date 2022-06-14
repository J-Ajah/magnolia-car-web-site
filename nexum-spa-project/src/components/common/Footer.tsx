import { EditableArea } from "@magnolia/react-editor";


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
        elementType="ul"
          className="footerArea md:grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4"
          key="footerArea"
          content={props["footerArea"]}
        />
      )}

      {/* Copyright Area  */}
      {/* {props["rightArea"] && <FooterCopyright data={props} />} */}

    </>
  );
};

export default Footer;
