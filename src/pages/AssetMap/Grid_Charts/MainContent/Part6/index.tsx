import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import GeneralStatusTrendReview from './PerformanceLineChart';
import ProfitLinChart from './ProfitLineChart';

const EnvironmentLawsAndIssuespart6: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="مالی"
            tabs={[{ label: '   نمودار های  مالی ', value: 0, id: uuidv4() }]}
            children={[
                <>
                    <div
                        className="containerCharts"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <GeneralStatusTrendReview />,
                        </div>
                        <div style={{ flex: 1 }}>
                            <ProfitLinChart /> ,
                        </div>
                    </div>
                </>,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart6;
