import { getAllAssets, getBankperfunde } from '@/selectors/state';
import { AllAssets, BankPerFund, SFC } from '@/types';
import * as S from './Styles';
import { useSelector } from 'react-redux';
import {
    Bar,
    BarChart,
    Cell,
    Legend,
    Pie,
    PieChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { IconButton, useMediaQuery, Tooltip as UTooltip } from '@mui/material';
import { breakpoints, colors, fonts } from '@/styles';
import {
    filterBasedOnVentureNameAndConvertingStringValueToNumber,
    filterBasedOnVentureNameAndConvertingStringValueToNumberWithoutSorting,
} from '@/utils/chartsFunctions';
import ChartsTooltip from '@/components/ChartsTooltip';
import SquareIcon from '@mui/icons-material/Square';
interface Chart1Props {
    fundName: string;
    showBarChart: boolean;
    setShowBarChart: (value: (prev: boolean) => boolean) => void;
}
const Chart1: SFC<Chart1Props> = ({
    fundName,
    showBarChart,
    setShowBarChart,
}) => {
    const allassets: AllAssets[] = useSelector(getAllAssets).allAssets;
    const bankperfund: BankPerFund[] = useSelector(getBankperfunde);
    const isMobile = useMediaQuery(`(max-width:${breakpoints.mobile} )`);

    const pieChartData =
        filterBasedOnVentureNameAndConvertingStringValueToNumberWithoutSorting(
            allassets,
            fundName
        );

    const barChartData =
        filterBasedOnVentureNameAndConvertingStringValueToNumber(
            bankperfund,
            fundName
        );
    const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const allowable = barChartData?.[0]?.allowable;

    const handleSwitchCharts = () => {
        setShowBarChart((prev) => !prev);
    };
    return (
        <>
            <S.Container>
                <S.SwitchBtn>
                    <UTooltip
                        title={showBarChart === true ? 'دارایی' : 'بانک‌ها'}
                        componentsProps={{
                            popper: {
                                sx: {
                                    '& .MuiTooltip-tooltip': {
                                        fontFamily: 'IRANSans',
                                        fontSize: '14px',
                                        padding: '5px 20px',
                                    },
                                },
                            },
                        }}
                    >
                        <IconButton
                            sx={{
                                position: 'relative', // Ensure it's positioned correctly
                                zIndex: 100,
                                background: colors.lightGreen,
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: colors.darkGreen,
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                            onClick={handleSwitchCharts}
                        >
                            {showBarChart && (
                                <PieChartIcon sx={{ color: colors.white }} />
                            )}
                            {!showBarChart && (
                                <BarChartIcon sx={{ color: colors.white }} />
                            )}
                        </IconButton>
                    </UTooltip>
                </S.SwitchBtn>
                {!showBarChart && (
                    <ResponsiveContainer width={'100%'} height={400}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                innerRadius={120}
                                outerRadius={155}
                                paddingAngle={1}
                                dataKey="allowable"
                                stroke="none"
                                cornerRadius={5}
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS1[index]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={piechartAllowableCustomTooltip1}
                            />
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                innerRadius={90}
                                outerRadius={110}
                                paddingAngle={1}
                                dataKey="value"
                                stroke="none"
                                cornerRadius={10}
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS1[index]}
                                    />
                                ))}
                            </Pie>
                            <text
                                x={'50%'}
                                y={'50%'}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="24px"
                                fontWeight="bold"
                                fill="#333"
                                fontFamily={fonts.family.default}
                            >
                                {fundName}
                            </text>
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={piechartAllowableCustomTooltip2}
                            />
                            <Legend content={renderLegend} />
                        </PieChart>
                    </ResponsiveContainer>
                )}

                {showBarChart && (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={barChartData}
                            layout="vertical"
                            margin={{ top: 0, right: 10, left: 20, bottom: 5 }}
                            barSize={30}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis
                type="number"
                tickCount={10}
                interval={0}
                angle={isMobile ? -90 : 0}
                tickFormatter={(tick) => tick.toLocaleString()}
                tickMargin={isMobile ? 10 : 5}
                tick={{
                  fontSize: "12px",
                  fontWeight: 600,
                  dx: -40,
                  fill: "#656364",
                  fontFamily: "IRANSans",
                }}
                strokeWidth={2}
              />
              <YAxis
                dataKey="bank"
                type="category"
                interval={0}
                tickSize={5}
                tick={{
                  fontSize: "12px",
                  fontWeight: 600,
                  dx: -30,
                  fill: "#656364",
                  textAnchor: "middle",
                  fontFamily: "IRANSans",
                }}
                strokeWidth={2}
              /> */}
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={barchartCustomTooltip}
                            />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                {barChartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                    />
                                ))}
                            </Bar>
                            <ReferenceLine
                                isFront={true}
                                x={allowable}
                                stroke={colors.chartsColor.green}
                                // stroke={colors.palette.red[500]}
                                // label="مقدار مجاز"
                                strokeWidth={3}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </S.Container>
        </>
    );
};
export default Chart1;

const barchartCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <ChartsTooltip
                tooltipType={2}
                label="بانک "
                value={payload[0]?.payload?.bank}
                label2="ارزش سپرده"
                value2={payload[0].value.toLocaleString()}
            />
        );
    }
};
const piechartAllowableCustomTooltip1 = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <ChartsTooltip
                tooltipType={3}
                label="نام دارایی"
                value={payload[0].payload.asset}
                label2="درصد دارایی"
                value2={payload[0].payload.percent}
                label3="ارزش دارایی"
                value3={parseFloat(payload[0].value).toLocaleString()}
            />
        );
    }
};
const piechartAllowableCustomTooltip2 = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <ChartsTooltip
                tooltipType={3}
                label="نام دارایی"
                value={payload[0].asset}
                label2="درصد دارایی"
                value2={payload[0].percent}
                label3="ارزش دارایی"
                value3={parseFloat(payload[0].value).toLocaleString()}
            />
        );
    }
};

const renderLegend = (props) => {
    const { payload } = props;
    if (payload && payload.length) {
        const firstHalf = payload.slice(0, 3);
        return (
            <S.LegendContainer>
                {firstHalf.map((entry, index) => (
                    <S.LegendInnerFlex
                        key={index}
                        style={{
                            color: entry.color,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <SquareIcon />
                        <div key={`item-${index}`}>{entry.payload.asset}</div>
                    </S.LegendInnerFlex>
                ))}
            </S.LegendContainer>
        );
    }
};
