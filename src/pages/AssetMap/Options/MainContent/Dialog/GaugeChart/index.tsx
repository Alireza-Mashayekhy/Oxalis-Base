import { SFC } from "@/types";
import * as S from "./Styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data: { name: string; value: number }[] = [
  { name: "Active", value: 500 },
  { name: "Inactive", value: 500 },
];

const COLORS: string[] = ["#8884d8", "#9E9E9E"];

const GaugeChart: SFC = () => {
  const renderCustomizedLabel = ({
    cx, // center x coordinate of the Pie
    cy, // center y coordinate of the Pie (adjusted for half-circle)
    outerRadius,
  }) => {
    // Adjust the y-coordinate to move the label up, so it's centered in the half-circle
    const centerY = cy - outerRadius / 2 + 10;
    return (
      <g>
        <S.StyledText x={cx} y={centerY}>
          سنجه ریسک
        </S.StyledText>
        <S.StyledText
          x={cx}
          y={centerY + 30}          
        >
          {`${"%" + " " + 12}`}
        </S.StyledText>
      </g>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            innerRadius={94}
            outerRadius={100}
            stroke="none"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default GaugeChart;
