import React, { useState } from "react";
import { SFC } from "@/types";
import ScatterHrChart from "./ScatterHrChart";
import ApexBarChart from "./VerticalBarHrChart";
import AccodionWrapper from "@/components/AccordionWrapper";
import ApexGoupedBarChart from './GroupedBarChart';
import { v4 as uuidv4 } from "uuid";

const EnvironmentLawsAndIssues: SFC = () => {
  const [value, setValue] = useState(0);

  return (
    <AccodionWrapper
      value={value}
      setValue={setValue}
      title='منابع انسانی'
      tabs={[
        { label: " عملکرد کارمندان ", value: 0, id: uuidv4() },
        { label: " میانگین درآمد هر بخش", value: 1, id: uuidv4() },
        { label: " میانگین درآمد هر شغل ", value: 2, id: uuidv4() },
        
      ]}
      children={[
        <ScatterHrChart />,
         <ApexBarChart/> , 
         <ApexGoupedBarChart /> ,
        ]}
    />
  );
};

export default EnvironmentLawsAndIssues;
