import { SalesData } from '@/types/new_data';
import './Style.css';
import { useSelector } from 'react-redux';
import { getSalesData } from '@/selectors/state';
import BubbleChart from '@/components/BubbleChart';

const ApexChart: React.FC = () => {
    const data: SalesData[] = useSelector(getSalesData);
    const colors: string[] = [
        '#00c49f',
        '#f44f73',
        '#ff8042',
        '#fab827',
        '#0088fe',
    ];

    const aggregatedData = data.reduce(
        (acc, { product, quantity_sold, revenue, profit }) => {
            if (!acc[product]) {
                acc[product] = {
                    product,
                    quantity_sold: 0,
                    revenue: 0,
                    profit: 0,
                };
            }
            acc[product].quantity_sold += quantity_sold;
            acc[product].revenue += revenue;
            acc[product].profit += profit;
            return acc;
        },
        {} as Record<
            string,
            {
                product: string;
                quantity_sold: number;
                revenue: number;
                profit: number;
            }
        >
    );

    const filteredData = Object.values(aggregatedData).map((item) => ({
        product: item.product,
        quantity_sold: item.quantity_sold,
        revenue: item.revenue,
        marginProfit:
            item.revenue !== 0 ? (item.profit / item.revenue) * 100 : 0,
    }));

    const series = filteredData.map((item, index) => ({
        x: Math.ceil(item.revenue / 100000000000) * 100000000000,
        y: item.marginProfit,
        z: item.quantity_sold,
        fillColor: colors[index % colors.length],
    }));

    return (
        <div>
            <div id="chart">
                <BubbleChart
                    datasets={[{ name: 'Sales Data', data: series }]}
                />
            </div>
        </div>
    );
};

export default ApexChart;
