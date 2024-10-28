import { useEffect, useState } from 'react';
import { SFC } from '@/types';
import * as S from './Styles';
import jsonData from '../chartData.json';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

import { filterBaseOnTypefAssets } from '@/utils/chartsFunctions';
import ChartsTooltip from '@/components/ChartsTooltip';

const GeneralStatusTrendReview: SFC = () => {
    const [chartData, setChartData] = useState([]);
    // const [assetsType, setAssetsType] = useState("سهام");

    useEffect(() => {
        setChartData(filterBaseOnTypefAssets(jsonData, 'سهام'));
        // setChartData(filterBaseOnTypefAssets(jsonData, assetsType));
    }, []);

    return (
        <>
            <S.ChartContainer>
                <ResponsiveContainer height={300} width={'100%'}>
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="1 0"
                            stroke="#656364"
                            opacity={0.5}
                        />

                        {/* <XAxis
                            dataKey="name"
                            // interval={0}
                            type="category"
                            axisLine={{ stroke: '#656364' }}
                            tick={{
                                fontFamily: 'inherit',
                                fontWeight: 600,
                                fontSize: '10px',
                                fill: '#656364',
                            }}
                        />
                        <YAxis
                            type="number"
                            axisLine={{ stroke: '#656364' }}
                            tick={{
                                fontSize: '12px',
                                fontWeight: 600,
                                fill: '#656364',
                                dx: -40,
                                fontFamily: 'IRANSans',
                            }}
                            // tickCount={5}
                            // interval={0}
                        /> */}
                        <Tooltip content={customTooltip} />
                        {/* <Legend content={renderLegend}  wrapperStyle={{ position: 'absolute', top: 30, left: 100 }} /> */}
                        <Line
                            dataKey="value"
                            type="monotone"
                            stroke="#cda558"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </S.ChartContainer>
        </>
    );
};

export default GeneralStatusTrendReview;

const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <ChartsTooltip
                tooltipType={2}
                label="نام صندوق"
                value={label}
                label2="ارزش دارایی (ریال)"
                value2={payload[0].value.toLocaleString('en-US')}
            />
        );
    }
};
