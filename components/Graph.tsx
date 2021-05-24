import React from "react";

import {
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from "recharts";

type Props = {
  coviddata: any;
};

const Graph: React.FC<Props> = ({ coviddata }) => {
  return (
    <LineChart
      width={700}
      height={500}
      data={coviddata}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        tickFormatter={(e) => {
          return e.slice(0, 4) + "/" + e.slice(5, 7) + "/" + e.slice(8, 10);
        }}
      />
      <YAxis type="number" domain={["auto", "auto"]} />
      <Tooltip />
      <Legend />
      <Line // 累計陽性者
        name="累計陽性者数"
        dataKey="npatients" // this.props.data のキー
        stroke="#8884d8" // 線の色
        unit="人" //単位
      />
      <Brush
        dataKey="npatients"
        stroke="#8884d8"
        startIndex={0}
        endIndex={50}
      />
    </LineChart>
  );
};

export default Graph;
