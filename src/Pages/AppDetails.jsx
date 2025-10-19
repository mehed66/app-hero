import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import Rating from "./Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === parseInt(id));
  const { image, description, title, descriptions, des, ratings } = appDetails;

  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    if (!installed) {
      setInstalled(true);
      toast.success("App Installed Successfully!");
    } 
  };

  return (
    <div>
      <div className="card bg-base-100 mt-8 mb-8">
        <div className="md:flex">
          <div>
            <figure className="w-[350px] mx-auto  overflow-hidden">
              <img className="w-full object-cover" src={image} alt="Shoes" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-xl md:text-4xl">{description}</h2>
            <h4>
              Developed by{" "}
              <span className="text-[#632EE3] font-bold">{title}</span>
            </h4>
            <div className="border-2 border-b-gray-400"></div>
            <div className="flex justify-items-start justify-center md:justify-start gap-16 mt-4 mb-4">
              <div>
                <div className="flex justify-center">
                  <span className="text-green-700 font-bold text-2xl p-1">
                    <FaArrowDown />
                  </span>
                </div>
                <p className="text-[10px] text-center">Downloads</p>
                <h1 className="text-3xl font-bold text-center">8M</h1>
              </div>
              <div>
                <div className="flex justify-center">
                  <span className="text-orange-500 font-bold text-2xl p-1">
                    <FaStar />
                  </span>
                </div>
                <p className="text-[10px] text-center">Average Ratings</p>
                <h1 className="text-3xl font-bold text-center">4.9</h1>
              </div>
              <div>
                <div className="flex justify-center">
                  <span className="text-fuchsia-800 font-bold text-2xl p-1">
                    <SlLike />
                  </span>
                </div>
                <p className="text-[10px] text-center">Total Reviews</p>
                <h1 className="text-3xl font-bold text-center">49K</h1>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleInstall}
                className={`btn ${
                  installed ? "bg-green-500" : "bg-green-600"
                } text-white`}
              >
                {installed ? "Installed" : "Install Now (291 MB)"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <h1 className="text-4xl font-bold md:text-left text-center mb-4">Ratings</h1>
          <Rating ratings={ratings}></Rating>
        </div>

        <div>
          <h2 className="text-2xl font-bold  md:text-left text-center">Descriptions</h2>
          <p className="text-justify p-8 md:p-4">{descriptions}</p>
          <p>{des}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
