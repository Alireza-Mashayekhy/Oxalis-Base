import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import EnvironmentLawsAndIssuesChart from './Chart';

const EnvironmentLawsAndIssues: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            tabs={[
                { label: 'جدول', value: 0, id: uuidv4() },
                { label: 'نمودار', value: 1, id: uuidv4() },
                { label: 'نمودار ترند', value: 2, id: uuidv4() },
            ]}
            children={[<EnvironmentLawsAndIssuesChart />, '', '']}
        />
    );
};

export default EnvironmentLawsAndIssues;
