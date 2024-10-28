import { useEffect, useState } from 'react';
import { ManufacturingData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getManData, getManFilterData } from '@/selectors/state';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Label,
} from 'recharts';

const StackedAreaChart: React.FC = () => {
    const data: ManufacturingData[] = useSelector(getManData);
    const filterData: ManufacturingData[] = useSelector(getManFilterData);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [chartData, setChartData] = useState<any[]>([]);

    const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];

    useEffect(() => {
        const inputData = filterData.length > 0 ? filterData : data;

        if (inputData.length > 0) {
            try {
                const filteredData = inputData.map(
                    ({ jalali_date, quantity, city }) => {
                        const [year, month] = jalali_date.split('/');
                        const newDate = `${year}/${month}`;
                        return { jalali_date: newDate, quantity, city };
                    }
                );

                const uniqueDates = Array.from(
                    new Set(filteredData.map((item) => item.jalali_date))
                );
                const chartDataMap: {
                    [key: string]: {
                        jalali_date: string;
                        cities: { [key: string]: number };
                    };
                } = {};

                uniqueDates.forEach((date) => {
                    chartDataMap[date] = { jalali_date: date, cities: {} };
                });

                filteredData.forEach((item) => {
                    if (chartDataMap[item.jalali_date]) {
                        chartDataMap[item.jalali_date].cities[item.city] =
                            (chartDataMap[item.jalali_date].cities[item.city] ||
                                0) + item.quantity;
                    }
                });

                const processedChartData = uniqueDates.map((date) => {
                    return { jalali_date: date, ...chartDataMap[date].cities };
                });

                setChartData(processedChartData);
            } catch (err) {
                console.error(err);
                setError('خطا در پردازش داده‌ها');
            }
        }
    }, [data, filterData]);

    if (error) return <div>{error}</div>;

    const cityKeys = Array.from(
        new Set(
            chartData.flatMap((item) =>
                Object.keys(item).filter((key) => key !== 'jalali_date')
            )
        )
    );

    const CustomLegend = () => {
        return (
            <ul
                style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {cityKeys.map((city, index) => (
                    <li
                        key={city}
                        style={{
                            marginLeft: '15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <span
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: colors[index % colors.length],
                                display: 'inline-block',
                                marginLeft: '3px',
                            }}
                        ></span>
                        <span style={{ color: '#585757', fontSize: '12px' }}>
                            {city}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        backgroundColor: '#444',
                        border: '1px solid #ddd',
                        padding: '10px',
                        borderRadius: '4px',
                    }}
                >
                    <p>{`تاریخ: ${payload[0].payload.jalali_date}`}</p>
                    {payload.map((item, index) => (
                        <>
                            <span
                                style={{ fontSize: '12px' }}
                                key={`item-${index}`}
                            >{`${item.name}: ${item.value.toLocaleString()}`}</span>
                            <br />
                        </>
                    ))}
                </div>
            );
        }
        return null;
    };

    const formatTooltipValue = (value: number) => {
        return value.toLocaleString();
    };

    return (
        <ResponsiveContainer height={350} width={'100%'}>
            <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
            >
                <CartesianGrid stroke="#ccc" vertical={false} />
                {/* <XAxis dataKey="jalali_date" angle={-20} dy={8} />
                <YAxis tickFormatter={formatTooltipValue} dx={-50}>
                    <Label
                        value="تعداد"
                        angle={-90}
                        position="insideLeft"
                        dx={-13}
                    />
                </YAxis> */}
                <Tooltip content={CustomTooltip} />
                <Legend content={CustomLegend} />
                {cityKeys.map((city, index) => (
                    <Area
                        key={city}
                        type="monotone"
                        dataKey={city}
                        stackId="1"
                        stroke={colors[index % colors.length]}
                        fill={colors[index % colors.length]}
                    />
                ))}
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default StackedAreaChart;
