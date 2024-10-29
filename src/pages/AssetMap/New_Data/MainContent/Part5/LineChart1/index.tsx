import { useEffect, useState } from 'react';
import { ManufacturingData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getManData, getManFilterData } from '@/selectors/state';
import LineChart from '@/components/chart';

interface DataPoint {
    date: string;
    [key: string]: number | string;
}

const CustomLegend = ({ payload }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0',
            }}
        >
            {payload.map((entry, index) => (
                <div
                    key={`item-${index}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 5px',
                    }}
                >
                    <span
                        style={{
                            backgroundColor: entry.color,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginLeft: 4,
                        }}
                    />
                    <span
                        style={{
                            fontSize: '12px',
                            color: 'rgb(102, 102, 102)',
                        }}
                    >
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>{`تاریخ: ${payload[0].payload.date}`}</p>
                {payload.map((item, index) => (
                    <span
                        key={`item-${index}`}
                    >{`${item.name}: ${item.value.toLocaleString()} `}</span>
                ))}
            </div>
        );
    }
    return null;
};

// تعریف نوع Props برای CustomTick
interface CustomTickProps {
    x: number; // موقعیت افقی
    y: number; // موقعیت عمودی
    payload: {
        value: string | number; // مقداری که باید نمایش داده شود
    };
}

// کامپوننت CustomTick
const CustomTick: React.FC<CustomTickProps> = ({ x, y, payload }) => {
    return (
        <text x={x} y={y} textAnchor="middle" fill="#666">
            {payload.value.toLocaleString()} {/* یا هر فرمت دلخواه */}
        </text>
    );
};

const GeneralStatusTrendReview: React.FC = () => {
    const data: ManufacturingData[] = useSelector(getManData);
    const filterData: ManufacturingData[] = useSelector(getManFilterData);
    const [salesData, setSalesData] = useState<DataPoint[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];

    useEffect(() => {
        const rawData = filterData.length > 0 ? filterData : data;

        if (rawData.length > 0) {
            const groupedData: { [key: string]: { [key: string]: number } } =
                {};

            rawData.forEach(({ jalali_date, quantity, product }) => {
                if (!groupedData[jalali_date]) {
                    groupedData[jalali_date] = {};
                }

                if (!groupedData[jalali_date][product]) {
                    groupedData[jalali_date][product] = 0;
                }
                groupedData[jalali_date][product] += quantity;
            });

            const formattedData: DataPoint[] = Object.keys(groupedData).map(
                (date) => ({
                    date,
                    ...groupedData[date],
                })
            );

            setSalesData(formattedData);
        } else {
            setLoading(true);
        }

        setLoading(false);
    }, [data, filterData]);

    if (error) return <div>{error}</div>;

    const cities = salesData.reduce((acc: string[], point: DataPoint) => {
        Object.keys(point).forEach((key) => {
            if (key !== 'date' && !acc.includes(key)) {
                acc.push(key);
            }
        });
        return acc;
    }, []);

    return (
        <LineChart
            labels={['test']}
            datasets={[{ name: 'test', data: [2, 3] }]}
        />
    );
};

export default GeneralStatusTrendReview;
