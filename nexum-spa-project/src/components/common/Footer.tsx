import { EditableArea } from "@magnolia/react-editor";

type Props = {};
const Footer: React.FC = (props: Props) => {
  return (
    <>
      {props["footerArea"] && (
        <EditableArea
          className="footerArea"
          key="footerArea"
          content={props["footerArea"]}
        />
      )}
    </>
  );
};

export default Footer;
