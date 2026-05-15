import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const StockCharts = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-zinc-500">No price data</p>;

  return (
    <ResponsiveContainer className="pt-1 pr-1 pl-0" width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid stroke="#444" />
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#60A5FA" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockCharts;
