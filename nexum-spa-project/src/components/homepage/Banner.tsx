import { Carousel } from "./Carousel";

type Props = {
  actionText: string;
  actionText2: string;
  actionText3: string;
  caption: string;
  caption2: string;
  caption3: string;
  description: string;
  description2: string;
  description3: string;
  image: Object;
  image2: Object;
  image3: Object;
};

export const Banner: React.FC<Props> = (props) => {
  console.log("Banner props", props);

  return (
    <>
      <Carousel data={props} />
    </>
  );
};
