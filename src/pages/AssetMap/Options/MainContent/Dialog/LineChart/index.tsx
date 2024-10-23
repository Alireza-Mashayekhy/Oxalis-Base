import { SFC } from "@/types";
import { optionsData } from "../../Table/OptionData";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartsTooltip from "@/components/ChartsTooltip";

const LineChartDisplay: SFC = ({ selectedRow }) => {
  return (
    <>
      <ResponsiveContainer height={300} width={"100%"}>
        <LineChart
          data={optionsData}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 0"
            stroke="#656364"
            opacity={0.5}
            vertical={false}
          />
          <XAxis
            dataKey="UAsellprice"
            interval={0}
            type="category"
            axisLine={{ stroke: "#656364" }}
            label={{
              value: `قیمت  دارایی پایه (${
                selectedRow && selectedRow["UAIndx"]
              })`,
              position: "insideBottom",
              offset: -10,
            }}
            tick={{
              fontFamily: "inherit",
              fontWeight: 600,
              // fontSize: "10px",
              fill: "#656364",
            }}
          />
          <YAxis
            dataKey="AYield"
            tick={{
              fontSize: "12px",
              fontWeight: 600,
              fill: "#656364",
              dx: -10,
              fontFamily: "IRANSans",
            }}
            label={{
              value: "(%)  بازه تا سررسید",
              angle: -90,
              position: "insideLeft",
            }}
            tickCount={10}
            interval={0}
          />
          <Tooltip content={customTooltip} />
          <Line
            type="monotone"
            dataKey="AYield"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default LineChartDisplay;

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ChartsTooltip
        tooltipType={1}
        label="بازه تا سررسید"
        value={payload[0].value.toLocaleString()}
      />
    );
  }
};
