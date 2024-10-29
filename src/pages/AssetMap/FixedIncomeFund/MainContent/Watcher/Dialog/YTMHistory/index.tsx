import { SFC } from '@/types';
import { data } from '../TradingHistory/data';
import LineChart from '@/components/chart';

const YTMHistory: SFC = () => {
    const sortedData = data.sort(
        (a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
    );

    const chartData = {
        labels: sortedData.map((item) =>
            new Date(item.Date).toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })
        ),
        datasets: [
            {
                name: 'Ytm',
                data: sortedData.map((item) =>
                    parseFloat(parseFloat(item.Ytm.replace('%', '')).toFixed(2))
                ),
            },
        ],
    };

    return (
        <LineChart datasets={chartData.datasets} labels={chartData.labels} />
    );
};
export default YTMHistory;
