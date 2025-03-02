"use client"; // Ensure this runs on the client-side

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "./ui/card";

const data = [
  { name: "S", value: 2 },
  { name: "M", value: 3 },
  { name: "T", value: 2 },
  { name: "W", value: 4 },
  { name: "T", value: 3 },
  { name: "F", value: 5 },
  { name: "S", value: 4 },
];

const ActivityChart = () => {
  return (
    <Card className="p-4 col-span-2">
      <h3 className="text-lg font-semibold">Activity</h3>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ActivityChart;
