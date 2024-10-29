import { useEffect, useState } from 'react';
import { ManufacturingData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getManData, getManFilterData } from '@/selectors/state';
import { RootState } from '@/types';
import AreaChart from '@/components/AreaChart';

const StackedAreaChart: React.FC = () => {
    const data: ManufacturingData[] = useSelector(getManData);
    const filterData: ManufacturingData[] = useSelector(getManFilterData);
    const selectedProducts: string[] = useSelector(
        (state: RootState) => state.productsFilterMan.selectedProducts
    );
    const selectedCities: string[] = useSelector(
        (state: RootState) => state.citiesFilterMan.selectedCities
    );
    const [error, setError] = useState<string | null>(null);
    const [chartData, setChartData] = useState<any[]>([]);

    const cityColors = {
        تهران: '#008ffb',
        مشهد: '#ff8042',
        شیراز: '#00e396',
        اصفهان: '#F4B400',
        تبریز: '#f55074',
    };
    useEffect(() => {
        // const inputData = filterData.length > 0 ? filterData : data;
        const inputData = filterData;

        const filteredData = inputData.filter(
            (item) =>
                (selectedProducts.length === 0 ||
                    selectedProducts.includes(item.product)) &&
                (selectedCities.length === 0 ||
                    !selectedCities.includes(item.city))
        );

        if (filteredData.length > 0) {
            try {
                const processedData = filteredData.map(
                    ({ jalali_date, quantity, city }) => {
                        const [year, month] = jalali_date.split('/');
                        const newDate = `${year}/${month}`;
                        return { jalali_date: newDate, quantity, city };
                    }
                );

                const uniqueDates = Array.from(
                    new Set(processedData.map((item) => item.jalali_date))
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

                processedData.forEach((item) => {
                    if (chartDataMap[item.jalali_date]) {
                        chartDataMap[item.jalali_date].cities[item.city] =
                            (chartDataMap[item.jalali_date].cities[item.city] ||
                                0) + item.quantity;
                    }
                });

                const finalChartData = uniqueDates.map((date) => {
                    return { jalali_date: date, ...chartDataMap[date].cities };
                });

                setChartData(finalChartData);
            } catch (err) {
                console.error(err);
                setError('خطا در پردازش داده‌ها');
            }
        }
    }, [data, filterData, selectedProducts, selectedCities]);
    if (error) return <div>{error}</div>;

    const cityKeys = Array.from(
        new Set(
            chartData.flatMap((item) =>
                Object.keys(item).filter((key) => key !== 'jalali_date')
            )
        )
    );

    const CustomLegend = () => {
        return (
            <ul
                style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {cityKeys.map((city) => (
                    <li
                        key={city}
                        style={{
                            marginLeft: '15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <span
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: cityColors[city] || '#000',
                                display: 'inline-block',
                                marginLeft: '3px',
                            }}
                        ></span>
                        <span style={{ color: '#585757', fontSize: '12px' }}>
                            {city}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        backgroundColor: '#444',
                        border: '1px solid #ddd',
                        padding: '10px',
                        borderRadius: '4px',
                    }}
                >
                    <p>{`تاریخ: ${payload[0].payload.jalali_date}`}</p>
                    {payload.map((item, index) => (
                        <>
                            <span
                                style={{ fontSize: '12px' }}
                                key={`item-${index}`}
                            >{`${item.name}: ${item.value.toLocaleString()}`}</span>
                            <br />
                        </>
                    ))}
                </div>
            );
        }
        return null;
    };

    const formatTooltipValue = (value: number) => {
        return value.toLocaleString();
    };
    return (
        <>
            <h5
                style={{
                    textAlign: 'center',
                    color: '#808080',
                    marginTop: '20px',
                }}
            >
                تولیدات روزانه هر شهر
            </h5>
            <AreaChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />
        </>
    );
};
export default StackedAreaChart;
