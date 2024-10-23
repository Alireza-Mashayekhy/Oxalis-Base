import { SFC } from "@/types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "../TradingHistory/data";
import ChartsTooltip from "@/components/ChartsTooltip";

const YTMHistory: SFC = () => {
  const chartData = data.map((item) => ({
    Date: new Date(item.Date).getTime(),
    Ytm: parseFloat(parseFloat(item.Ytm.replace("%", "")).toFixed(2)),
  }));

  return (
    <>
      {" "}
      <ResponsiveContainer height={400} width={"100%"}>
        <LineChart
          data={chartData}
          margin={{
            top: 30,
            right: 20,
            left: 0,
            bottom: 25,
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
            // scale="time"
            tickFormatter={(unixTime) =>
              new Date(unixTime).toLocaleDateString("fa-IR")
            }
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            dataKey="Ytm"
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
          <Line type="monotone" dataKey="Ytm" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default YTMHistory;

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ChartsTooltip
        tooltipType={1}
        label="YTM"
        value={payload[0].value.toLocaleString()}
      />
    );
  }
};
