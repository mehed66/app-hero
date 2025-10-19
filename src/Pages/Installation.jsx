import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { addtoStorageData } from "../LocalStorge/loaclSroge";

const Installation = () => {
  const data = useLoaderData();
  console.log(data);
  useEffect(()=>{
    const allAppsData = addtoStorageData();
    console.log(allAppsData);
  },[])
  

  
  return (
    <div>
      <h1 className="text-black text-3xl  text-center font-black mt-5">
        Our All Applications
      </h1>
      <p className="text-sm text-gray-400 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
    </div>
  );
};

export default Installation;
