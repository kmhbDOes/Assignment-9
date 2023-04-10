import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const marksArray = [
    { assignment_number: 1, mark: 60 },
    { assignment_number: 2, mark: 57 },
    { assignment_number: 3, mark: 60 },
    { assignment_number: 4, mark: 59 },
    { assignment_number: 5, mark: 60 },
    { assignment_number: 6, mark: 52 },
    { assignment_number: 7, mark: 60 },
    { assignment_number: 8, mark: 60 },
  ];
  return (
    <div className="flex justify-center ml-8 md:ml-0 my-8 bg-white">
      <AreaChart
        width={500}
        height={400}
        data={marksArray}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="assignment_number" name="Assignment Serial" />
        <YAxis dataKey="mark" />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
