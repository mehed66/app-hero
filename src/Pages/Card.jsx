import React from "react";

import { FaStar } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router";
const Card = ({ card }) => {
  const { image, description, id} = card;
  return (
    <Link to = {`/app/${id}`}>
      <div className="card bg-base-100  border shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="h-48 overflow-hidden">
          <img className="mt-20 w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{description}</h2>

          <div className="card-actions justify-between">
            <button className="btn bg-[#F1F5E8] text-green-500">
              <FaArrowDown />
              9M
            </button>
            <button className="btn bg-[#FFF0E1] text-[#FF8811]">
              <FaStar />5
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
