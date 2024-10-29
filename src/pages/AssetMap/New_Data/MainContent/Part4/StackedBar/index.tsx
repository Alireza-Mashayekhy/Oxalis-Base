import { useEffect, useState } from 'react';
import { SalesData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getSalesData, getSalesFilterData } from '@/selectors/state';
import BarChart from '@/components/BarChart';

const CustomLegend = (props) => {
    const { payload } = props;
    return (
        <ul
            style={{
                display: 'flex',
                justifyContent: 'center',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
            }}
        >
            {payload.map((entry, index) => (
                <li
                    key={`item-${index}`}
                    style={{
                        display: 'flex',
                        color: '#585757',
                        fontSize: '12px',
                        alignItems: 'center',
                        marginRight: 10,
                    }}
                >
                    <span
                        style={{
                            backgroundColor: entry.color,
                            borderRadius: '50%',
                            width: 10,
                            height: 10,
                            margin: 5,
                        }}
                    />
                    <span>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};

const Example: React.FC = () => {
    const data: SalesData[] = useSelector(getSalesData);
    const filterData: SalesData[] = useSelector(getSalesFilterData);
    const [chartData, setChartData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('fa-IR').format(num);
    };

    useEffect(() => {
        const sourceData = filterData.length > 0 ? filterData : data;

        if (!sourceData || sourceData.length === 0) {
            setError('داده‌ای برای نمایش وجود ندارد');
            return;
        }

        const filteredData = sourceData.map(
            ({ jalali_date, quantity_sold, city }) => {
                const [year, month] = jalali_date.split('/');
                const newDate = `${year}/${month}`;

                return {
                    jalali_date: newDate,
                    quantity_sold,
                    city,
                };
            }
        );

        const uniqueDates = Array.from(
            new Set(filteredData.map((item) => item.jalali_date))
        );
        const chartDataMap: {
            [key: string]: {
                jalali_date: string;
                quantity_sold: number;
                cities: { [key: string]: number };
            };
        } = {};

        uniqueDates.forEach((date) => {
            chartDataMap[date] = {
                jalali_date: date,
                quantity_sold: 0,
                cities: {},
            };
        });

        filteredData.forEach((item) => {
            if (chartDataMap[item.jalali_date]) {
                chartDataMap[item.jalali_date].quantity_sold +=
                    item.quantity_sold;
                chartDataMap[item.jalali_date].cities[item.city] =
                    (chartDataMap[item.jalali_date].cities[item.city] || 0) +
                    item.quantity_sold;
            }
        });

        const processedChartData = uniqueDates.map((date) => {
            const dataPoint = chartDataMap[date];
            return { jalali_date: dataPoint.jalali_date, ...dataPoint.cities };
        });

        setChartData(processedChartData);
    }, [data, filterData]);

    if (error) return <div>{error}</div>;

    const formatNumberr = (num: number) => {
        return new Intl.NumberFormat('fa-IR', {
            notation: 'standard',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    };

    return (
        <BarChart
            labels={['test']}
            datasets={[{ name: 'test', data: [2, 3] }]}
        />
    );
};

export default Example;
