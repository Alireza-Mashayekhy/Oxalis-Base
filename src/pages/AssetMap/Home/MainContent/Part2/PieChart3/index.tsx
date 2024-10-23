import { SFC } from "@/types";
import * as S from "./Styles";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip, RenderCustomLegend } from "../chartsHelperFunctions";

import { COLORS } from "./data";
import { useSelector } from "react-redux";
import { getData } from "@/selectors/state";
import { filterBaseOnVentureName } from "@/utils/chartsFunctions";

const PieChartThree: SFC = () => {
  const data = useSelector(getData);
  const chartData = filterBaseOnVentureName(data, "درآمد ثابت");

  return (
    <>
      <S.H4>ارزش روز صندوق‌های درآمد ثابت</S.H4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={true}
            innerRadius={40}
            outerRadius={97}
            paddingAngle={1}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip content={CustomTooltip} />
          <Legend content={RenderCustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartThree;
