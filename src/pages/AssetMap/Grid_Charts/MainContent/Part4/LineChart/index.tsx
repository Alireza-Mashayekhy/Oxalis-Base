import '../style.css';

import { useSelector } from 'react-redux';

import LineChart from '@/components/chart';
import {
    getSalesData,
    getSalesFilterData,
    getSelectedCitiesSales,
} from '@/selectors/state';
import { RootState } from '@/types';
import { SalesData } from '@/types/new_data';

const GeneralStatusTrendReview: React.FC = () => {
    const data: SalesData[] = useSelector(getSalesData);
    const filterData: SalesData[] = useSelector(getSalesFilterData);
    const selectedCities: string[] = useSelector(getSelectedCitiesSales);
    const selectedProducts: string[] = useSelector(
        (state: RootState) => state.productsFilter.selectedProducts
    );

    const colorMap = {
        تهران: '#008ffb',
        مشهد: '#ff8042',
        شیراز: '#00e396',
        اصفهان: '#F4B400',
        تبریز: '#f55074',
    };

    const processData = (inputData: SalesData[]) => {
        const groupedData: { [key: string]: { [key: string]: number } } = {};

        inputData.forEach(({ jalali_date, revenue, city, product }) => {
            if (!groupedData[jalali_date]) {
                groupedData[jalali_date] = {};
            }
            if (!groupedData[jalali_date][city]) {
                groupedData[jalali_date][city] = 0;
            }

            if (!selectedProducts.includes(product)) {
                groupedData[jalali_date][city] += revenue;
            }
        });

        return Object.keys(groupedData).map((date) => {
            return {
                date,
                ...groupedData[date],
            };
        });
    };

    const renderCustomizedLegend = () => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10px',
                    margin: '10px',
                }}
            >
                {cities.map((city) => (
                    <div
                        key={city}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '7px',
                        }}
                    >
                        <div
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: colorMap[city],
                                marginLeft: '5px',
                            }}
                         />
                        <span
                            style={{
                                fontSize: '14px',
                                color: 'rgb(102, 102, 102)',
                            }}
                        >
                            {city}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const formatTooltipValue = (value: number) => {
        return Math.floor(value).toLocaleString('fa-IR');
    };

    const formattedData = processData(data);
    const customData =
        filterData.length > 0 ? processData(filterData) : formattedData;

    const filteredData = customData.map((point) => {
        const filteredPoint = { date: point.date };
        Object.keys(point).forEach((key) => {
            if (selectedCities.length === 0 || !selectedCities.includes(key)) {
                filteredPoint[key] = point[key];
            }
        });
        return filteredPoint;
    });

    const cities = formattedData.reduce((acc: string[], point) => {
        Object.keys(point).forEach((key) => {
            if (key !== 'date' && !acc.includes(key)) {
                acc.push(key);
            }
        });
        return acc;
    }, []);

    const chartData = {
        labels: [],
        datasets: [],
    };
    const renderTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        backgroundColor: '#444',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '4px',
                    }}
                >
                    <p>{`تاریخ: ${label}`}</p>
                    {payload.map((entry) => (
                        <>
                            <span
                                key={entry.name}
                            >{`${entry.name}: ${formatTooltipValue(entry.value)}`}</span>{' '}
                            <br />
                        </>
                    ))}
                </div>
            );
        }

        return null;
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
                فروش محصول در هر شهر
            </h5>
            <LineChart
                datasets={chartData.datasets}
                labels={chartData.labels}
            />
        </>
    );
};

export default GeneralStatusTrendReview;
