import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const InstallApp = ({ card, handleUninstall }) => {
  const { id, image, description } = card;

  return (
    <div className="card border-gray-200 border-1 shadow-sm p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <figure className="h-40 w-full sm:w-32 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="App Thumbnail"
            />
          </figure>

          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-semibold text-lg">{description}</h2>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <button className="flex items-center text-green-600 gap-1">
                <FaArrowDown /> 9M
              </button>
              <button className="flex items-center text-[#FF8811] gap-1">
                <FaStar /> 5
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <button
            onClick={() => handleUninstall(id)}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl px-5 py-2 w-full sm:w-auto"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
