import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./error-404.png";
import Navbar from "../Componets/Navber/Navber";
import Footer from "../Componets/Footer/Footer"


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
     <div>
          <Navbar></Navbar>
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center bg-gray-100">
      <img
        src={img}
        alt="404 Error"
        className="w-64 md:w-80 mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
        Oops, page not found!
      </h1>
      <p className="text-gray-600 mb-6 text-sm md:text-base">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-fuchsia-700 text-white px-6 py-2 rounded-xl text-sm md:text-base hover:bg-fuchsia-800 transition-all"
      >
        Go Back
      </button>
    </div>
    <Footer></Footer>
     </div>
  );
};

export default ErrorPage;
