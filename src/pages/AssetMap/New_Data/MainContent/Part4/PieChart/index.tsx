import { useSelector } from 'react-redux';

import PieChart from '@/components/PieChart';
import { getSalesData } from '@/selectors/state';
import { getTheme } from '@/selectors/state';
import { darkTheme, lightTheme } from '@/styles/theme';
import { SalesData } from '@/types/new_data';

const PRODUCT_COLORS = {
    محصول_1: '#00c49f',
    محصول_2: '#f44f73',
    محصول_3: '#ff8042',
    محصول_4: '#fab827',
    محصول_5: '#0088fe',
};
const Example = () => {
    const salesData: SalesData[] = useSelector(getSalesData);
    const theme = useSelector(getTheme);

    const productRevenueMap: Record<string, number> = {};

    salesData.forEach(({ product, revenue }) => {
        if (productRevenueMap[product]) {
            productRevenueMap[product] += revenue;
        } else {
            productRevenueMap[product] = revenue;
        }
    });

    const data = Object.entries(productRevenueMap).map(([name, value]) => ({
        name,
        value,
    }));

    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

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

    return <PieChart datasets={[{ name: 'test', data: 2 }]} />;
};

export default Example;
