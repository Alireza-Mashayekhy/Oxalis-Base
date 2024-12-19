import { useSelector } from 'react-redux';

import { getTheme } from '@/redux/selectors';

import * as S from './Style';
interface Dataset {
    name: string;
    data: number[];
    color?: string;
}

interface LineChartProps {
    datasets: Dataset[];
    labels: string[];
    selectedHeight?: string;
}

const LineChart: React.FC<LineChartProps> = ({
    datasets,
    labels,
    selectedHeight,
}) => {
    const theme = useSelector(getTheme);
    const chartOptions = {
        chart: {
            type: 'line' as const,
            height: 400,
            background: 'transparent',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: true,
                tools: {
                    download: true,
                },
            },
        },
        colors: datasets.map((dataset) => dataset.color || '#00E396'), // اختصاص رنگ‌ها به داده‌ها
        xaxis: {
            categories: labels,
            labels: {
                style: {
                    colors: '#000000',
                    fontFamily: 'IranSans',
                },
            },
            axisBorder: {
                color: '#444444',
            },
            axisTicks: {
                color: '#444444',
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => {
                    return value.toLocaleString('fa-IR');
                },
                style: {
                    colors: '#000000',
                    fontFamily: 'IranSans',
                },
            },
        },
        grid: {
            borderColor: '#444444',
        },
        legend: {
            show: false,
        },
        stroke: {
            curve: 'straight' as const, // اصلاح مقدار تایپ شده
        },
        tooltip: {
            theme,
            style: {
                fontSize: '14px',
                fontFamily: 'IranSans',
                colors: ['#f0f0f0'], // رنگ متون داخل tooltip
            },
            marker: {
                show: true,
            },
        },
        toolbar: {
            show: true,
            tools: {
                download: true,
            },
            style: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
            className="flex justify-center pr-5"
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: selectedHeight || 'auto',
                }}
            >
                <S.ChartStyle
                    options={chartOptions}
                    series={datasets}
                    type="line"
                />
            </div>
        </div>
    );
};

export default LineChart;
