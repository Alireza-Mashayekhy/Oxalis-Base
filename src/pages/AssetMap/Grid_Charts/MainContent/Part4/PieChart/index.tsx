import { SalesData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getSalesData, getSalesFilterData } from '@/selectors/state';
import { darkTheme, lightTheme } from '@/styles/theme';
import { getTheme } from '@/selectors/state';
import '../style.css';
import { RootState } from '@/types';
import PieChart from '@/components/PieChart';
const PRODUCT_COLORS = {
    محصول_1: '#00c49f',
    محصول_2: '#f44f73',
    محصول_3: '#ff8042',
    محصول_4: '#fab827',
    محصول_5: '#0088fe',
};

const Example = () => {
    const salesData: SalesData[] = useSelector(getSalesData);
    const filterData: SalesData[] = useSelector(getSalesFilterData);
    const selectedProducts = useSelector(
        (state: RootState) => state.productsFilter.selectedProducts
    );
    const selectedCities = useSelector(
        (state: RootState) => state.citiesFilter.selectedCities
    );
    const theme = useSelector(getTheme);

    const productRevenueMap = {};
    const dataToUse = filterData.length > 0 ? filterData : salesData;

    dataToUse.forEach(({ product, revenue }) => {
        if (productRevenueMap[product]) {
            productRevenueMap[product] += revenue;
        } else {
            productRevenueMap[product] = revenue;
        }
    });

    let data = Object.entries(productRevenueMap).map(([name, value]) => ({
        name,
        value,
    }));

    if (selectedProducts.length > 0) {
        data = data.filter((entry) => !selectedProducts.includes(entry.name));
    }

    const totalValue = data.reduce(
        (sum, entry) => sum + (entry.value as number),
        0
    );

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0].payload;
            const formattedValue = Math.floor(value).toLocaleString('fa-IR');
            const percentage = ((value / totalValue) * 100).toFixed(2);
            return (
                <div
                    style={{
                        backgroundColor: '#333',
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                >
                    <p>{`${name} : ${formattedValue} تومان `}</p>
                    <p>{`درصد: ${percentage}%`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomLegend = ({ payload }) => {
        return (
            <ul
                style={{
                    display: 'inline-flex',
                    listStyleType: 'none',
                    padding: 0,
                    flexDirection: 'column',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    margin: '10px',
                    background: `${
                        theme === 'dark'
                            ? lightTheme.textColor
                            : darkTheme.textColor
                    }`,
                }}
            >
                {payload.map((entry, index) => (
                    <li
                        key={`item-${index}`}
                        style={{
                            marginRight: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '15px',
                            paddingTop: '5px',
                        }}
                    >
                        <div
                            style={{
                                width: '12px',
                                height: '12px',
                                margin: '4px',
                                backgroundColor:
                                    PRODUCT_COLORS[entry.name] || '#ccc',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '12px',
                                color: `${
                                    theme === 'dark'
                                        ? darkTheme.textColor
                                        : lightTheme.textColor
                                }`,
                            }}
                        >
                            {entry.name}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const datasets = [
        {
            name: 'test',
            data: 3,
        },
        {
            name: 'test2',
            data: 5,
            color: 'red',
        },
    ];

    return (
        <>
            <h5
                style={{
                    textAlign: 'center',
                    color: '#808080',
                    marginTop: '20px',
                }}
            >
                توزیع درآمد محصول
            </h5>

            <PieChart datasets={datasets} />
            {/* <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        innerRadius={68}
                        outerRadius={115}
                        fill="#8884d8"
                        cornerRadius={5}
                        paddingAngle={2}
                        stroke="none"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={PRODUCT_COLORS[entry.name] || '#ccc'}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={CustomTooltip} />
                    <Legend
                        payload={data}
                        layout="vertical"
                        verticalAlign="top"
                        content={CustomLegend}
                        align="center"
                        wrapperStyle={{
                            position: 'absolute',
                            right: '0px',
                        }}
                    />
                </PieChart>
            </ResponsiveContainer> */}
        </>
    );
};
export default Example;
