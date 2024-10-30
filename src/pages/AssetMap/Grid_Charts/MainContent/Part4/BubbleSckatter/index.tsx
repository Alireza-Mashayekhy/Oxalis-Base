import { SalesData } from '@/types/new_data';
import './Style.css';
import { useSelector } from 'react-redux';
import { getSalesData } from '@/selectors/state';
import { RootState } from '@/types';
import LineChart from '@/components/chart';

const PRODUCT_COLORS = {
    محصول_1: '#00c49f',
    محصول_2: '#f44f73',
    محصول_3: '#ff8042',
    محصول_4: '#fab827',
    محصول_5: '#0088fe',
};

const ApexChart: React.FC = () => {
    const data: SalesData[] = useSelector(getSalesData);

    const selectedProducts = useSelector(
        (state: RootState) => state.productsFilter.selectedProducts
    );

    const aggregatedData = data.reduce(
        (acc, { product, quantity_sold, revenue, profit }) => {
            if (
                selectedProducts.length > 0 &&
                selectedProducts.includes(product)
            ) {
                return acc;
            }

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
        fillColor: PRODUCT_COLORS[item.product] || '#000000',
    }));

    const series = filteredData.map((item) => ({
        x: Math.ceil(item.revenue / 100000000000) * 100000000000,
        y: item.marginProfit,
        z: item.quantity_sold,
        fillColor: item.fillColor,
    }));

    return (
        <div id="chart">
            <h5
                style={{
                    textAlign: 'center',
                    color: '#808080',
                    marginTop: '20px',
                }}
            >
                عملکرد محصول
            </h5>
            <LineChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />
        </div>
    );
};

export default ApexChart;
