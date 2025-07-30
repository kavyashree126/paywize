"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "01 May", hours: 4 },
  { date: "02 May", hours: 6 },
  { date: "03 May", hours: 3 },
  { date: "04 May", hours: 5 },
  { date: "05 May", hours: 7 },
  { date: "06 May", hours: 2 },
  { date: "07 May", hours: 4 },
];

const TaskGraph = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Tracked Hours
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#6366f1"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskGraph;
