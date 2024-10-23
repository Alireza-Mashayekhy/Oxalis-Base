import { useState } from "react";
import { SFC } from "@/types";
import AccodionWrapper from "@/components/AccordionWrapper";
import { v4 as uuidv4 } from "uuid";
import ChartsContent from "./ChartsPannel";



const OrderStatus: SFC = () => {
  const [value, setValue] = useState(0);
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  return (
    <AccodionWrapper
      value={value}
      setValue={setValue}
      tabs={[
        { label: "نمودارصندوق‌ها", value: 0, id: uuidv4() },
        // { label: "همگام", value: 1, id: uuidv4() },
        // { label: "وبازار", value: 2, id: uuidv4() },
        // { label: "کامیاب", value: 3, id: uuidv4() },
        // { label: "همیار", value: 4, id: uuidv4() },
        // { label: "نماد", value: 5, id: uuidv4() },
        // { label: "پیامبر", value: 6, id: uuidv4() },
        // { label: "حکمت", value: 7, id: uuidv4() },
        // { label: "امین", value: 8, id: uuidv4() },
        // { label: "زرفام", value: 9, id: uuidv4() },
      ]}
      children={[
        <ChartsContent />,
        // <PieChartTwo />,
        // <PieChartThree />,
        // <PieChartOne />,
        // <PieChartTwo />,
        // <PieChartThree />,
        // <PieChartOne />,
        // <PieChartTwo />,
        // <PieChartThree />,
        // <PieChartThree />,
      ]}
    />
    
  );
};

export default OrderStatus;
