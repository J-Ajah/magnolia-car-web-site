import { EditableArea } from "@magnolia/react-editor";

type Props = {};
const Footer: React.FC = (props: Props) => {
  return (
    <>
      {props["footerArea"] && (
        <EditableArea
          className="footerArea md:grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4"
          key="footerArea"
          content={props["footerArea"]}
        />
      )}
    </>
  );
};

export default Footer;
