import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllCard from "./AllCard";

const Apps = () => {
   const appAllDatas = useLoaderData()
   const [search, setSearch] = useState('')
  //  console.log(search);
   
   const term = search.trim().toLocaleLowerCase()
  //  console.log(appAllDatas)
  //  const searchApp = appAllDatas
   const searchApp = term? appAllDatas.filter(allcard => allcard.title.toLocaleLowerCase().includes(term)) : appAllDatas;
  //  console.log(searchApp);
   

  return (
    <div>
      <h1 className="text-black text-3xl  text-center font-black mt-5">
        Our All Applications
      </h1>
      <p className="text-sm text-gray-400 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="md:flex items-center justify-between px-8 mt-4">
        <div><p> {searchApp.length}Apps Found</p></div>
        <div>
          <label 
          className="input"

          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
            type="search" 
            value={search}
            onChange={e =>setSearch(e.target.value)}
            required placeholder="Search"

             />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5  gap-2">
          {searchApp.map((allcard)  => (
          <div>
           <AllCard key={allcard.id} allcard={allcard}></AllCard>
           
          </div>
        ))}
        </div>
    </div>
  );
};

export default Apps;
