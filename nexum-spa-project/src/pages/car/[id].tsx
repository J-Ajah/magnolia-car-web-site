import { useEffect } from "react";
import { useRouter } from "next/router"
import parser from "html-react-parser"


const Details = (props) => {
 const router = useRouter();
 const data  = router.query;
 console.log(data)

  return <div className="flex mx-4 my-4">
    

    <div className="border-2 rounded w-[80%]">
        <img className=" w-[100%] rounded h-[600px] object-cover"   src={data.image as string} alt={data.name as string}/>
    </div>

    <div className="px-4 pt-5 bg-gray-200 ml-5 w-[30%]">
        <h1 className="font-bold text-[28px]">{data.name}</h1>
         
         <p className="mt-10 font-semibold">Description</p>
        <p className="text-lg mt-4">{parser(data.description as string)}</p>
    </div>

  </div>;
};

export default Details;
