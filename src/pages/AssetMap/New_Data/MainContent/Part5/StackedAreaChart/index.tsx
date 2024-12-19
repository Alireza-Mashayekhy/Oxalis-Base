import { useEffect, useState } from 'react';

import { getManData } from '@/api/new_data';
import AreaChart from '@/components/AreaChart';
import { ManufacturingData } from '@/types/new_data';

const StackedAreaChart: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [chartData, setChartData] = useState<any[]>([]);

    const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];
    useEffect(() => {
        const fetchManData = async () => {
            try {
                const data: ManufacturingData[] = await getManData();
                const filteredData = data.map(
                    ({ jalali_date, quantity, city }) => {
                        const [year, month] = jalali_date.split('/');
                        const newDate = `${year}/${month}`;
                        return { jalali_date: newDate, quantity, city };
                    }
                );

                const uniqueDates = Array.from(
                    new Set(filteredData.map((item) => item.jalali_date))
                );
                const chartDataMap: {
                    [key: string]: {
                        jalali_date: string;
                        cities: { [key: string]: number };
                    };
                } = {};

                uniqueDates.forEach((date) => {
                    chartDataMap[date] = { jalali_date: date, cities: {} };
                });

                filteredData.forEach((item) => {
                    if (chartDataMap[item.jalali_date]) {
                        chartDataMap[item.jalali_date].cities[item.city] =
                            (chartDataMap[item.jalali_date].cities[item.city] ||
                                0) + item.quantity;
                    }
                });

                const processedChartData = uniqueDates.map((date) => {
                    return { jalali_date: date, ...chartDataMap[date].cities };
                });

                setChartData(processedChartData);
            } catch (err) {
                console.error(err);
                setError('خطا در دریافت داده‌ها');
            } finally {
                setLoading(false);
            }
        };
        fetchManData();
    }, []);

    if (loading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>{error}</div>;

    const cityKeys = Array.from(
        new Set(
            chartData.flatMap((item) =>
                Object.keys(item).filter((key) => key !== 'jalali_date')
            )
        )
    );

    return (
        <AreaChart
            labels={['test']}
            datasets={[{ name: 'test', data: [2, 3] }]}
        />
    );
};

export default StackedAreaChart;
