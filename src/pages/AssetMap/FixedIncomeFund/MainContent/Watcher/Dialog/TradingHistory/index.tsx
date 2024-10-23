import { SFC } from "@/types";
import * as S from "./Styles";
import { data } from "./data";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect } from "react";
import ChartsTooltip from "@/components/ChartsTooltip";

const TradingHistory: SFC = () => {
  let chartData = [];
  chartData = data.map((item) => ({
    Date: new Date(item.Date).getTime(),
    Final_Price: item.Final_Price,
  }));
  console.log(chartData);

  useEffect(() => {
    // data.forEach((d) => {
    //   d.Date = new Date(d.Date).getTime();
    // });
  }, []);

  return (
    <S.Container>
      <ResponsiveContainer height={400} width={"100%"}>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 0"
            stroke="#656364"
            opacity={0.5}
            vertical={false}
          />

          <XAxis
            dataKey="Date"
            domain={["dataMin", "dataMax"]}
            scale="time"
            type="number"
            // tickFormatter={() =>
            //   new Date(unixTime).toLocaleDateString()
            // }

            tick={() => null}
            tickLine={false}
          />
          <YAxis
            dataKey="Final_Price"
            tick={{
              fontSize: "12px",
              fontWeight: 600,
              fill: "#656364",
              dx: -10,
              fontFamily: "IRANSans",
            }}
            tickCount={10}
            interval={0}
          />
          <Tooltip content={customTooltip} />
          <Line type="monotone" dataKey="Final_Price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  );
};
export default TradingHistory;

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ChartsTooltip
        tooltipType={1}
        label="حجم معامله"
        value={payload[0].value.toLocaleString()}
      />
    );
  }
};
