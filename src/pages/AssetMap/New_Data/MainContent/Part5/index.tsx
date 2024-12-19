import { SyntheticEvent,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import MapChart from './GeoChart';
import GroupedBarChart from './HeatmapChart';
import ScatterHrChart from './LineChart1';
import HeatMapChart from './LineChart2';
import GeneralStatusTrendReview from './LineChat3';

const EnvironmentLawsAndIssuespart5: SFC = () => {
    const [value, setValue] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAccordionChange = (
        event: SyntheticEvent,
        expanded: boolean
    ) => {
        setIsExpanded(expanded);
    };

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="تولید"
            tabs={[
                { label: ' میزان تولید در سال', value: 0, id: uuidv4() },
                { label: 'موجودی محصول', value: 1, id: uuidv4() },
                { label: '  تولیدات روزانه هر شهر ', value: 2, id: uuidv4() },
                { label: ' الگوهای فصلی تولید ', value: 3, id: uuidv4() },
                {
                    label: '  نقشه مقادیر تولید در هر  شهر',
                    value: 4,
                    id: uuidv4(),
                },
            ]}
            defaultExpanded={isExpanded}
            onChange={handleAccordionChange}
            children={[
                <ScatterHrChart />,
                <HeatMapChart />,
                <GeneralStatusTrendReview />,
                <GroupedBarChart />,
                <MapChart />,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart5;
