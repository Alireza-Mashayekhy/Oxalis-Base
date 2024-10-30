import { getTheme } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import * as S from './Style';

interface HeatmapDataPoint {
    x: string | number; // محور X می‌تواند نام یا عدد باشد
    y: string | number; // محور Y می‌تواند نام یا عدد باشد
    value: number; // مقدار شدت رنگ
}

interface Dataset {
    name: string;
    data: HeatmapDataPoint[];
    color?: string;
}

interface HeatmapChartProps {
    datasets: Dataset[];
    labelsX: string[]; // برچسب‌های محور X
    labelsY: string[]; // برچسب‌های محور Y
    selectedHeight?: string;
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({
    datasets,
    labelsX,
    labelsY,
    selectedHeight,
}) => {
    const theme = useSelector(getTheme);

    const chartOptions = {
        chart: {
            type: 'heatmap' as 'heatmap',
            background: 'transparent',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                },
            },
        },
        colors: ['#008FFB'], // رنگ پایه برای شدت رنگ‌ها
        xaxis: {
            categories: labelsX,
            labels: {
                style: {
                    colors: '#000000',
                    fontFamily: 'IranSans',
                },
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
            categories: labelsY,
            labels: {
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
        dataLabels: {
            enabled: false, // عدم نمایش مقادیر داخل سلول‌ها
        },
        grid: {
            padding: {
                right: 20,
            },
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
            y: {
                formatter: (value) => `مقدار: ${value.toLocaleString('fa-IR')}`,
            },
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                colorScale: {
                    ranges: [
                        { from: 0, to: 20, color: '#00A100' },
                        { from: 21, to: 50, color: '#128FD9' },
                        { from: 51, to: 80, color: '#FFB200' },
                        { from: 81, to: 100, color: '#FF0000' },
                    ],
                },
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
                    type="heatmap"
                />
            </div>
        </div>
    );
};

export default HeatmapChart;
