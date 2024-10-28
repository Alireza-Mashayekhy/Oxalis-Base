import { useState } from 'react';
import { SFC } from '@/types';
import ScatterHrChart from './StackedBar';
import HeatMapChart from './BubbleSckatter';
import GeneralStatusTrendReview from './PieChart';
import AccodionWrapper from '@/components/AccordionWrapper';
import GroupedBarChart from './LineChart';
import { v4 as uuidv4 } from 'uuid';

const EnvironmentLawsAndIssuespart4: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="فروش"
            tabs={[
                { label: 'فروش ماهانه هر شهر', value: 0, id: uuidv4() },
                { label: 'عملکرد محصول ', value: 1, id: uuidv4() },
                { label: 'توزیع درامد محصول', value: 2, id: uuidv4() },
                { label: 'فروش محصول در هر شهر', value: 3, id: uuidv4() },
            ]}
            children={[
                <ScatterHrChart />,
                <HeatMapChart />,
                <GeneralStatusTrendReview />,
                <GroupedBarChart />,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart4;
