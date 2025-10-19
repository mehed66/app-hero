// import React, { useState } from "react";
// import { useLoaderData } from "react-router";
// import Card from "./Card";

// const Apps = () => {
//   const appAllDatas = useLoaderData();
//   const [search, setSearch] = useState("");
//   const term = search.trim().toLocaleLowerCase();
//   const searchApp = term
//     ? appAllDatas.filter((card) =>
//         card.title.toLocaleLowerCase().includes(term)
//       )
//     : appAllDatas;

//   return (
//     <div className="px-4 md:px-8 lg:px-12">
//       <h1 className="text-black text-2xl md:text-3xl text-center font-black mt-5">
//         Our All Applications
//       </h1>
//       <p className="text-xs md:text-sm text-gray-400 text-center mb-4">
//         Explore all apps developed by us. We code for millions.
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 mb-6">
//         <p className="text-sm md:text-base text-gray-600">
//           {searchApp.length} Apps Found
//         </p>

//         <label
//           className="input flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-auto"
//         >
//           <svg
//             className="h-[1.2em] opacity-50"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <g
//               strokeLinejoin="round"
//               strokeLinecap="round"
//               strokeWidth="2.5"
//               fill="none"
//               stroke="currentColor"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <path d="m21 21-4.3-4.3"></path>
//             </g>
//           </svg>
//           <input
//             type="search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             required
//             placeholder="Search apps..."
//             className="w-full outline-none bg-transparent text-sm md:text-base"
//           />
//         </label>
//       </div>

//       <div
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           md:grid-cols-3
//           lg:grid-cols-4
//           gap-4
//           md:gap-6
//         "
//       >
//         {searchApp.map((card) => (
//           <Card key={card.id} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Apps;
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Card from "./Card";
import img from "./App-Error.png";
const Apps = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const appAllDatas = useLoaderData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchApp = term
    ? appAllDatas.filter((card) =>
        card.title.toLocaleLowerCase().includes(term)
      )
    : appAllDatas;

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <h1 className="text-black text-2xl md:text-3xl text-center font-black mt-5">
        Our All Applications
      </h1>
      <p className="text-xs md:text-sm text-gray-400 text-center mb-4">
        Explore all apps developed by us. We code for millions.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 mb-6">
        <p className="text-sm md:text-base text-gray-600">
          {searchApp.length} Apps Found
        </p>

        <label className="input flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-auto">
          <svg
            className="h-[1.2em] opacity-50"
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
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search apps..."
            className="w-full outline-none bg-transparent text-sm md:text-base"
          />
        </label>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-4 
          md:gap-6
        "
      >
        {searchApp.length > 0 ? (
          searchApp.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-10">
            <img
              src={img} 
              alt="No Apps Found"
              className="w-40 h-40 mb-4"
            />
            <h1 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
            <p className="text-gray-500 text-center">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <button
              className="bg-fuchsia-700 text-white px-6 py-2 rounded-xl text-sm md:text-base hover:bg-fuchsia-800 transition-all"
              onClick={() => navigate(-1)}
            >
              Go Back!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
