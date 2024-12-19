import { useSelector } from 'react-redux';

import LineChart from '@/components/chart';
import { getFilterData,getFinanceData } from '@/selectors/state';
import { FinancialData } from '@/types/new_data';

interface DataPoint {
    date: string;
    income: number;
    expense: number;
    profit: number;
}

const ProfitLinChart: React.FC = () => {
    const data: FinancialData[] = useSelector(getFinanceData);
    const filterData: FinancialData[] = useSelector(getFilterData);

    // تبدیل داده‌ها به فرمت مورد نیاز برای نمودار
    const formatSalesData = (dataArray: FinancialData[]): DataPoint[] => {
        return dataArray.map(({ jalali_date, income, expense, profit }) => {
            const [year, month] = jalali_date.split('/');
            const newDate = `${year}/${month}`;
            return { date: newDate, income, expense, profit };
        });
    };

    const salesData: DataPoint[] = formatSalesData(data);
    const filteredSalesData: DataPoint[] = formatSalesData(filterData);

    const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];

    const Lines = [
        { key: 'income', name: 'درآمد' },
        { key: 'expense', name: 'هزینه' },
        { key: 'profit', name: 'سود' },
    ];

    if (!data.length) return <div>داده‌ای برای نمایش وجود ندارد.</div>;

    // انتخاب داده‌های نمودار بر اساس اینکه آیا فیلتر داده وجود دارد یا خیر
    const chartData = filterData.length > 0 ? filteredSalesData : salesData;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`تاریخ: ${label}`}</p>
                    {payload.map((entry, index) => {
                        const line = Lines.find(
                            (line) => line.key === entry.dataKey
                        );
                        const name = line ? line.name : entry.name;
                        return (
                            <p
                                key={`item-${index}`}
                                style={{ color: entry.color }}
                            >
                                {`${name}: ${Math.floor(entry.value).toLocaleString('fa-IR')}`}
                            </p>
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <LineChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />
        </>
    );
};

export default ProfitLinChart;
