import { getTheme } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import * as S from './Style';

interface BubbleDataPoint {
    x: number;
    y: number;
    z: number; // اندازه حباب
}

interface Dataset {
    name: string;
    data: BubbleDataPoint[];
    color?: string;
}

interface BubbleChartProps {
    datasets: Dataset[];
    selectedHeight?: string;
}

const BubbleChart: React.FC<BubbleChartProps> = ({
    datasets,
    selectedHeight,
}) => {
    const theme = useSelector(getTheme);

    const chartOptions = {
        chart: {
            type: 'bubble' as 'bubble',
            background: 'transparent',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                },
            },
        },
        colors: datasets.map((dataset) => dataset.color || '#00E396'), // رنگ‌ها برای هر داده
        xaxis: {
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
            title: {
                text: 'محور X',
                style: {
                    color: '#000000',
                    fontFamily: 'IranSans',
                },
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
            title: {
                text: 'محور Y',
                style: {
                    color: '#000000',
                    fontFamily: 'IranSans',
                },
            },
        },
        grid: {
            borderColor: '#444444',
        },
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'IranSans',
            labels: {
                colors: '#000000',
            },
        },
        tooltip: {
            theme: theme,
            style: {
                fontSize: '14px',
                fontFamily: 'IranSans',
                colors: ['#f0f0f0'], // رنگ متون داخل tooltip
            },
            marker: {
                show: true,
            },
            x: {
                show: true,
                formatter: (val) => `X: ${val.toLocaleString('fa-IR')}`,
            },
            y: {
                show: true,
                formatter: (val) => `Y: ${val.toLocaleString('fa-IR')}`,
            },
            z: {
                show: true,
                formatter: (val) => `اندازه: ${val.toLocaleString('fa-IR')}`,
            },
        },
    };

    const series = datasets.map((dataset) => ({
        name: dataset.name,
        data: dataset.data,
    }));

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
                    series={series}
                    type="bubble"
                />
            </div>
        </div>
    );
};

export default BubbleChart;
