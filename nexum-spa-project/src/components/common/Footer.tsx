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

let rightArea = {};

const Footer: React.FC<Props> = (props: Props) => {

  // rightArea = props["rightArea"];
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
    </>
  );
};

// export const getRightArea = ()=>{
//    return rightArea;
// }

export default Footer;
