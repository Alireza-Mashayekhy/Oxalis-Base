import React, { useState, useEffect } from 'react';
import { HRData } from '@/types/new_data';
import { SFC } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import { darkTheme, lightTheme } from '@/styles/theme';
import { getTheme } from '@/selectors/state';
import LineChart from '@/components/chart';

const radi = [
    { radii: 4, label: '30 ' },
    { radii: 6, label: '45' },
    { radii: 8, label: '60 ' },
    { radii: 10, label: '75 ' },
    { radii: 12, label: '90 ' },
];

const getFillColor = (job_title: string) => {
    switch (job_title) {
        case 'دستیار':
            return '#00c49f';
        case 'متخصص':
            return '#f44f73';
        case 'مدیر':
            return '#ff8042';
        case 'اپراتور':
            return '#0088fe';
        case 'سرپرست':
            return '#fab827';
        default:
            return '#0088fe';
    }
};

const ScatterHrChart: SFC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getHrData);
    const [hrData, setHrData] = useState<HRData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data.length > 0) {
            setHrData(data);
        }
    }, [data]);
    if (error) {
        return <div>Error: {error}</div>;
    }

    const uniqueTypes = Array.from(
        new Set(hrData.map((item) => item.job_title))
    );

    const formatNumberWithSeparator = (value: number) => {
        return new Intl.NumberFormat('fa-IR').format(value);
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const performanceScore = formatNumberWithSeparator(
                payload[0].payload.performance_score
            );
            const totalPayment = Math.floor(payload[0].payload.total_payment);

            return (
                <div
                    style={{
                        backgroundColor: '#333',
                        border: '1px solid #cccccc',
                        padding: '5px',
                        borderRadius: '5px',
                    }}
                >
                    <span className="label">{`امتیاز عملکرد: ${performanceScore}`}</span>{' '}
                    <br />
                    <span className="label">{`مجموع پرداختی: ${formatNumberWithSeparator(totalPayment)}`}</span>
                </div>
            );
        }

        return null;
    };
    const theme = useSelector(getTheme);

    return (
        <div style={{ direction: 'rtl' }}>
            <LineChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span
                    style={{
                        color: `${
                            theme === 'dark'
                                ? darkTheme.textColor
                                : lightTheme.textColor
                        }`,
                    }}
                >
                    {' '}
                    عنوان شغل:{' '}
                </span>
                {uniqueTypes.map((type) => (
                    <div
                        key={type}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0 5px',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: getFillColor(type),
                                marginRight: '5px',
                            }}
                        />
                        <span
                            style={{ color: '#656364', marginRight: '5px' }}
                        >{`  ${type.toUpperCase()} `}</span>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '5px',
                }}
            >
                <span
                    style={{
                        color: `${
                            theme === 'dark'
                                ? darkTheme.textColor
                                : lightTheme.textColor
                        }`,
                    }}
                >
                    ساعت آموزش :
                </span>
                {radi.map((radius, index) => (
                    <div
                        style={{ display: 'flex', alignItems: 'center' }}
                        key={index}
                    >
                        <Circle radius={radius.radii} />
                        <span style={{ marginLeft: '10px', color: '#656364' }}>
                            {radius.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScatterHrChart;

interface CircleProps {
    radius: number;
}

const Circle: React.FC<CircleProps> = ({ radius }) => {
    return (
        <div
            style={{
                width: radius * 2,
                height: radius * 2,
                borderRadius: '50%',
                backgroundColor: 'black',
                margin: '5px',
            }}
        />
    );
};
