import { useState } from 'react';
// import GroupedBarChart from './GroupedBarChart';
import { v4 as uuidv4 } from 'uuid';

// import GeneralStatusTrendReview from "./LineChar";
import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import ScatterHrChart from './PerformanceLineChart';
import HeatMapChart from './ProfitLineChart';

const EnvironmentLawsAndIssuespart6: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="مالی"
            tabs={[
                { label: ' معیار های  مالی ', value: 0, id: uuidv4() },
                { label: 'عملکرد مالی ', value: 1, id: uuidv4() },
                // { label: "نمودار ناحیه ای  ", value: 2, id: uuidv4() },
                // { label: "نمودار خطی   ", value: 3, id: uuidv4() },
            ]}
            children={[
                <ScatterHrChart />,
                <HeatMapChart />,
                //  <GeneralStatusTrendReview/> ,
                //  <GroupedBarChart /> ,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart6;
