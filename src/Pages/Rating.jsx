import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const Rating = ({ ratings }) => {

  return (
    <div className=" md:p-0 p-4">
      <ComposedChart
      layout="vertical"
      style={{ width: '100%',  maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={ratings}
     
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category"  />
      <Bar dataKey="count" barSize={30} fill="#413ea0" />
    </ComposedChart>
    </div>
  );
};

export default Rating;
