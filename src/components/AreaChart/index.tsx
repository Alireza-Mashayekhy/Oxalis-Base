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
    withoutItems?: boolean;
}

const AreaChart: React.FC<AreaChartProps> = ({
    datasets,
    labels,
    selectedHeight,
    withoutItems,
}) => {
    const theme = useSelector(getTheme);

    const chartOptions = {
        chart: {
            type: 'area' as 'area',
            background: 'transparent',
            toolbar: {
                show: withoutItems ? false : true,
                tools: {
                    download: true,
                },
            },
        },
        dataLabels: {
            enabled: false, // غیرفعال کردن نمایش اعداد روی نمودار
        },
        colors: datasets.map((dataset) => dataset.color || '#00E396'), // رنگ‌ها برای هر داده
        xaxis: {
            categories: labels,
            labels: {
                show: withoutItems ? false : true,
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
            show: withoutItems ? false : true,
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
            show: withoutItems ? false : true,
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
            enabled: withoutItems ? false : true,
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
            curve: 'smooth' as 'smooth',
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.5,
                opacityFrom: 0.9,
                opacityTo: 0.2,
                stops: [0, 99, 100],
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
            className="flex justify-center"
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
                    type="area"
                />
            </div>
        </div>
    );
};

export default AreaChart;
