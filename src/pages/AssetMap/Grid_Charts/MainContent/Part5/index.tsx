import './style.css';

import { Grid } from '@mui/material';
import { SyntheticEvent,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccodionWrapper from '@/components/AccordionWrapper';
import { SFC } from '@/types';

import CityFilter from './FilterCharts/CityFilter';
import ProductFilter from './FilterCharts/ProductFilter';
import MapChart from './GeoChart/index';
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
            tabs={[{ label: ' نمودار های تولید  ', value: 0, id: uuidv4() }]}
            defaultExpanded={isExpanded}
            onChange={handleAccordionChange}
            children={[
                <>
                    <br />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '40px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '12px',
                                marginRight: '30px',
                                color: '#808080',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {' '}
                            فیلتر داینامیک :{' '}
                        </span>
                        <CityFilter />
                        <ProductFilter />
                    </div>
                    <br />

                    <Grid
                        className="containerCharts"
                        container
                        sx={{ width: '100%' }}
                    >
                        <Grid item sm={6}>
                            <ScatterHrChart />
                        </Grid>
                        <Grid item sm={6}>
                            <HeatMapChart />
                        </Grid>
                    </Grid>

                    <Grid
                        className="containerCharts"
                        container
                        sx={{ width: '100%' }}
                    >
                        <Grid item sm={6}>
                            <GeneralStatusTrendReview />
                        </Grid>
                        <Grid item sm={6}>
                            <GroupedBarChart />
                        </Grid>
                    </Grid>
                    <div
                        className="containerCharts"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <MapChart />
                    </div>
                </>,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart5;
