import { EditableArea } from "@magnolia/react-editor";

type Props = {
  carsListingArea: {
    carLength: any;
  };
};

let val : any;

export const CarListing: React.FC<Props> = ({ carsListingArea }) => {
  const element = []
   Object.entries(carsListingArea).forEach(([key,value])=>{
    console.log("Element key is :",key, "Element Value :", value);

    if(key.includes('0')){
       element.push(value)
    }
   });

   val = element;


  return (
    <div className="car-container md:flex md:flex-wrap">
     
      {carsListingArea && (
          <EditableArea className="me flex flex-wrap" key="carsListingArea" item={element} content={carsListingArea} />
      )}
    </div>
  );
};

export const getCarLength  = ()=>{
   return val as any;
}
