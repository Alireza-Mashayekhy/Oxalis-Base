import { useEffect, useState } from 'react';
import { SFC } from '@/types';
import * as S from './Styles';
import jsonData from '../chartData.json';
import SquareIcon from '@mui/icons-material/Square';
import {
    dailyValueBaseOnNameOfFund,
    sortAndColored,
} from '@/utils/chartsFunctions';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import { Paper } from '@mui/material';
import ChartsTooltip from '@/components/ChartsTooltip';

const GeneralStatusChart: SFC = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const result = dailyValueBaseOnNameOfFund(jsonData);
        const sortedData = sortAndColored(result);

        setChartData(sortedData);
    }, []);

    const customTickFormatter = (value) => {
        return Math.round(value / 1000000000).toLocaleString('en-US');
        return value.toLocaleString('en-US');
    };

    return (
        <>
            <S.ChartContainer>
                <ResponsiveContainer height={300} width={'100%'}>
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 15,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="1 0"
                            stroke="#656364"
                            opacity={0.5}
                            vertical={false}
                        />
                        {/* <XAxis
                            dataKey="name"
                            type="category"
                            // interval={0}
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
                            tickFormatter={customTickFormatter}
                            tick={{
                                fontSize: '12px',
                                fontWeight: 600,
                                dx: -40,
                                fill: '#656364',
                                fontFamily: 'IRANSans',
                            }}
                            // tickCount={5}
                            // interval={0}
                        /> */}
                        <Tooltip
                            content={customTooltip}
                            cursor={{ fill: 'transparent' }}
                        />
                        <Legend content={renderLegend} />

                        <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                            {' '}
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={getColor(entry)}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </S.ChartContainer>
        </>
    );
};

export default GeneralStatusChart;

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
const renderLegend = () => {
    const legendLabels = [
        { label: ' 1,000 B >', color: '#4dbaa3' },
        { label: '1,000 B - 25,000 B', color: '#ee930e' },
        { label: '< 25,000 B', color: '#f55074' },
    ];
    return (
        <Paper
            sx={{
                backgroundColor: '#282828',
                width: 'max-content',
                pr: 4,
                py: 1,
                position: 'absolute',
                top: -270,
                left: 80,
            }}
        >
            {legendLabels.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        justifyContent: 'end',
                        alignItems: 'baseLine',
                        fontSize: '10px',
                        fontFamily: 'IRANSans',
                        color: item.color,
                        fontWeight: 600,
                        marginBottom: '2px',
                    }}
                >
                    <SquareIcon sx={{ fontSize: '10px', mx: 1 }} />
                    {item.label}
                </div>
            ))}
        </Paper>
    );
};

const getColor = (entry) => {
    console.log({ entry });
    if (entry.value < 1000000000000) {
        return '#4dbaa3'; // Color for values under 1 million
    } else if (entry.value >= 1000000000000 && entry.value <= 25000000000000) {
        return '#ee930e'; // Color for values between 1 to 4 million
    } else {
        return '#f55074'; // Color for values bigger than 3 million
    }
};
