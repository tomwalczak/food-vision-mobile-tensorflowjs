import React from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
      {payload.value}%
    </text>
  );
};

export default function PredCharts({ data }) {
  return (
    <BarChart
      width={420}
      height={170}
      data={data}
      layout="vertical"
      fill="#fff"
      margin={{ top: 10 }}
    >
      <XAxis
        type="number"
        domain={[0, 100]}
        tickFormatter={(tick) => {
          return `${tick}%`;
        }}
      />
      <YAxis
        type="category"
        dataKey="food"
        tick={{ fill: "white", fontSize: 12 }}
        width={140}
      />

      <Bar dataKey="prob" fill="#fff"></Bar>
    </BarChart>
  );
}
