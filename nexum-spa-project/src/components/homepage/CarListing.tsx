import { EditableArea } from "@magnolia/react-editor";

type Props = {
  carsListingArea: {};
};

export const CarListing: React.FC<Props> = ({ carsListingArea }) => {
  return (
    <div className="car-container md:flex md:flex-wrap">
     
      {carsListingArea && (
          <EditableArea className="me flex flex-wrap" key="carsListingArea" content={carsListingArea} />
      )}
    </div>
  );
};
