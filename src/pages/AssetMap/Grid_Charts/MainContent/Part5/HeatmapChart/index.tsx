import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HeatmapChart from '@/components/HeatmapChart';
import { getManData, getManFilterData } from '@/selectors/state';
import { RootState } from '@/types';
import { ManufacturingData } from '@/types/new_data';

const ApexChart = () => {
    const data: ManufacturingData[] = useSelector(getManData);
    const filterData: ManufacturingData[] = useSelector(getManFilterData);
    const selectedProducts = useSelector(
        (state: RootState) => state.productsFilterMan.selectedProducts
    );
    const [series, setSeries] = useState([]);
    const [xaxis, setxaxis] = useState([]);
    const [yaxis, setyaxis] = useState([]);
    useEffect(() => {
        // const dataToUse = filterData.length > 0 ? filterData : data;
        const dataToUse = filterData;
        const filteredData =
            selectedProducts.length > 0
                ? dataToUse.filter(
                      (item) => !selectedProducts.includes(item.product)
                  )
                : dataToUse;

        if (filteredData.length > 0) {
            const processedData = filteredData.map((item) => ({
                jalali_date: item.jalali_date,
                quantity: item.quantity,
            }));

            const uniqueMonths = new Set();
            const uniqueYears = new Set();
            const quantityMap = {};

            processedData.forEach((item) => {
                const [year, month] = item.jalali_date
                    .split('/')
                    .map(Number)
                    .slice(0, 2);
                uniqueMonths.add(month);
                uniqueYears.add(year);
                const key = `${year}-${month}`;
                quantityMap[key] = (quantityMap[key] || 0) + item.quantity;
            });

            const monthsArray = Array.from(uniqueMonths).sort();
            const yearsArray = Array.from(uniqueYears).sort();

            setxaxis(monthsArray);
            setyaxis(yearsArray);

            const seriesData = yearsArray.map((year) => {
                return {
                    name: `${year}`,
                    data: monthsArray.map((month) => {
                        const key = `${year}-${month}`;
                        return {
                            x: month,
                            y: quantityMap[key] || 0,
                        };
                    }),
                };
            });

            setSeries(seriesData);
        }
    }, [data, filterData, selectedProducts]);
    return (
        <div>
            <h5
                style={{
                    textAlign: 'center',
                    color: '#808080',
                    marginTop: '20px',
                }}
            >
                الگو فصلی تولید
            </h5>

            <HeatmapChart datasets={series} labelsX={xaxis} labelsY={yaxis} />
        </div>
    );
};

export default ApexChart;
