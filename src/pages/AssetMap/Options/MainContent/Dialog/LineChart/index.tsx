import LineChart from '@/components/chart';
import ChartsTooltip from '@/components/ChartsTooltip';
import { SFC } from '@/types';

const LineChartDisplay: SFC = ({ selectedRow }) => {
    return (
        <>
            <LineChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />
        </>
    );
};
export default LineChartDisplay;

const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <ChartsTooltip
                tooltipType={1}
                label="بازه تا سررسید"
                value={payload[0].value.toLocaleString()}
            />
        );
    }
};
