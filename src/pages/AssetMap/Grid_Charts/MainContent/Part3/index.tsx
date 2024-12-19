import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import ApexGoupedBarChart from './GroupedBarChart';
import ScatterHrChart from './ScatterHrChart';
import ApexBarChart from './VerticalBarHrChart';

const EnvironmentLawsAndIssues: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="منابع انسانی"
            tabs={[
                { label: ' عملکرد کارمندان ', value: 0, id: uuidv4() },
                { label: ' میانگین درآمد هر بخش', value: 1, id: uuidv4() },
                { label: ' میانگین درآمد هر شغل ', value: 2, id: uuidv4() },
            ]}
            children={[
                <ScatterHrChart />,
                <ApexBarChart />,
                <ApexGoupedBarChart />,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssues;
