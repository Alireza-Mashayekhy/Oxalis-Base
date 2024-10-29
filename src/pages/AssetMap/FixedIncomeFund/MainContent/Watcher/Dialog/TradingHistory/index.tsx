import { SFC } from '@/types';
import * as S from './Styles';
import { data } from './data';
import LineChart from '@/components/chart';

const TradingHistory: SFC = () => {
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
                name: 'Final Price',
                data: sortedData.map((item) => item.Final_Price),
            },
        ],
    };

    return (
        <S.Container>
            <LineChart
                datasets={chartData.datasets}
                labels={chartData.labels}
            />
        </S.Container>
    );
};
export default TradingHistory;
