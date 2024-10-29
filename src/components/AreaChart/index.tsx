import { getTheme } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import * as S from './Style';

interface Dataset {
    name: string;
    data: number[];
    color?: string;
}

interface AreaChartProps {
    datasets: Dataset[];
    labels: string[];
    selectedHeight?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
    datasets,
    labels,
    selectedHeight,
}) => {
    const theme = useSelector(getTheme);

    const chartOptions = {
        chart: {
            type: 'area' as 'area',
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
        },
        stroke: {
            curve: 'smooth' as 'smooth', // اصلاح مقدار تایپ شده برای نمای مساحتی نرم‌تر
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100],
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
                    height: selectedHeight || '400px',
                }}
            >
                <S.ChartStyle
                    options={chartOptions}
                    series={series}
                    type="area"
                />
            </div>
        </div>
    );
};

export default AreaChart;
