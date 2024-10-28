import { useState } from 'react';
import { SFC } from '@/types';
import ScatterHrChart from './StackedBar';
import HeatMapChart from './BubbleSckatter';
import GeneralStatusTrendReview from './PieChart';
import AccodionWrapper from '@/components/AccordionWrapper';
import GroupedBarChart from './LineChart';
import { v4 as uuidv4 } from 'uuid';
import CityFilter from './FilterCharts/CityFilter/index';
import ProductFilter from './FilterCharts/ProductFilter';
import './style.css';
import { Grid } from '@mui/material';

const EnvironmentLawsAndIssuespart4: SFC = () => {
    const [value, setValue] = useState(0);

    return (
        <AccodionWrapper
            value={value}
            setValue={setValue}
            title="فروش"
            tabs={[{ label: '  نمودار های  فروش ', value: 0, id: uuidv4() }]}
            children={[
                <>
                    <br />
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr 1fr',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '30px',
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
                            فیلتر داینامیک :
                        </span>
                        <CityFilter />
                        <ProductFilter />
                    </div>

                    <Grid className="containerCharts" container>
                        <Grid item sm={6}>
                            <ScatterHrChart />
                        </Grid>
                        <Grid item sm={6}>
                            <HeatMapChart />
                        </Grid>
                    </Grid>

                    <div
                        className="containerCharts"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '30px',
                        }}
                    >
                        <div style={{ flex: '1' }} className="piechart">
                            <GeneralStatusTrendReview />
                        </div>
                        <div style={{ flex: '1' }}>
                            <GroupedBarChart />
                        </div>
                    </div>
                </>,
            ]}
        />
    );
};

export default EnvironmentLawsAndIssuespart4;
