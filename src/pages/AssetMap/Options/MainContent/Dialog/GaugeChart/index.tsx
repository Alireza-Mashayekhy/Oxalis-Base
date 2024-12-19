import PieChart from '@/components/PieChart';
import { SFC } from '@/types';

import * as S from './Styles';

const data: { name: string; value: number }[] = [
    { name: 'Active', value: 500 },
    { name: 'Inactive', value: 500 },
];

const COLORS: string[] = ['#8884d8', '#9E9E9E'];

const GaugeChart: SFC = () => {
    const renderCustomizedLabel = ({
        cx, // center x coordinate of the Pie
        cy, // center y coordinate of the Pie (adjusted for half-circle)
        outerRadius,
    }) => {
        // Adjust the y-coordinate to move the label up, so it's centered in the half-circle
        const centerY = cy - outerRadius / 2 + 10;
        return (
            <g>
                <S.StyledText x={cx} y={centerY}>
                    سنجه ریسک
                </S.StyledText>
                <S.StyledText x={cx} y={centerY + 30}>
                    {`${`%` + ` ${  12}`}`}
                </S.StyledText>
            </g>
        );
    };

    return (
        <>
            <PieChart datasets={[{ name: 'test', data: 2 }]} />
        </>
    );
};
export default GaugeChart;
