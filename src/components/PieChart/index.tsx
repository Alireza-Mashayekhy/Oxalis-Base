import { getTheme } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import * as S from './Style';

interface Dataset {
    name: string;
    data: number;
    color?: string;
}

interface PieChartProps {
    datasets: Dataset[];
    selectedHeight?: string;
}

const PieChart: React.FC<PieChartProps> = ({ datasets, selectedHeight }) => {
    const theme = useSelector(getTheme);

    const chartOptions = {
        chart: {
            type: 'pie' as 'pie',
            background: 'transparent',
        },
        colors: datasets.map((dataset) => dataset.color || '#00E396'), // رنگ‌ها برای هر داده
        labels: datasets.map((dataset) => dataset.name), // نام هر بخش از نمودار دایره‌ای
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
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'IranSans',
            labels: {
                colors: '#000000',
            },
        },
    };

    const series = datasets.map((dataset) => dataset.data);

    return (
        <div
            style={{
                // width: '100%',
                height: '100%',
                aspectRatio: '1',
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
                    type="pie"
                />
            </div>
        </div>
    );
};

export default PieChart;
