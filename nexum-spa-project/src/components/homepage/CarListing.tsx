import { EditableArea } from "@magnolia/react-editor";

type Props = {
  carsListingArea: {
    carLength: [];
  };
};

let val: any;

export const CarListing: React.FC<Props> = ({ carsListingArea }) => {
  const element = [];


  // Gets the list of cars that is available for display
  Object.entries(carsListingArea).forEach(([key, value]) => {
    if (key.includes("0")) {
      element.push(value);
    }
  });

  val = element;

  return (
    <div className="car-container md:flex md:flex-wrap lg:flex-wrap">
      {carsListingArea && (
        <EditableArea
          className="me flex flex-wrap"
          key="carsListingArea"
          item={element}
          content={carsListingArea}
        />
      )}
    </div>
  );
};

export const getCars = () => {
  return val;
};
