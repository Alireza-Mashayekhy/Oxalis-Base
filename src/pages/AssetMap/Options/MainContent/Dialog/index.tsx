import { SFC } from "@/types";

import GaugeChart from "./GaugeChart";
import LineChartDisplay from "./LineChart";

const OptionsDialog: SFC = ({ selectedRow }) => {
  return (
    <>
      <div>
        <GaugeChart />
      </div>
      <div>
        <LineChartDisplay selectedRow={selectedRow} />
      </div>
    </>
  );
};
export default OptionsDialog;
