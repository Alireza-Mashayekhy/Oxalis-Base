import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ManufacturingData } from '@/types/new_data';
import { getManData } from '@/api/new_data';

const HeatMapChart = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [seriesData, setSeries] = useState([]);

    const options = {
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            heatmap: {
                colorScale: {
                    inverse: true,
                },
            },
        },
        colors: [
            '#F3B415',
            '#F27036',
            '#663F59',
            '#6A6E94',
            '#4E88B4',
            '#00A7C6',
            '#18D8D8',
            '#A9D794',
            '#46AF78',
            '#A93F55',
            '#8C5E58',
            '#2176FF',
            '#33A1FD',
            '#7A918D',
            '#BAFF29',
        ],
        xaxis: {
            type: 'category',
            categories: [
                'Quantity',
                'Quality Score',
                'Defective Percentage',
                'Inventory Stock',
            ],
        },
        yaxis: {
            type: 'category',
            categories: [
                'Inventory Stock',
                'Defective Percentage',
                'Quality Score',
                'Quantity',
            ],
        },
        title: {
            text: 'Dynamically generated HeatMap from series data',
        },
    };

    // useEffect(() => {
    //   const fetchManufacturingData = async () => {
    //     setLoading(true);
    //     try {
    //       const data = await getManData();
    //       const seriesData = data.map(item => ({
    //         x: ['Quantity', 'Quality Score', 'Defective Percentage', 'Inventory Stock'],
    //         y: [
    //           item.quantity,
    //           item.quality_score,
    //           item.defective_percentage,
    //           item.inventory_stock
    //         ].reduce((acc, value, index) => {
    //           acc.push({ x: options.xaxis.categories[index], y: options.yaxis.categories[index], value });
    //           return acc;
    //         }, [])
    //       }));

    //       setSeries(seriesData);

    //     } catch (err) {
    //       console.error(err);
    //       setError('خطا در دریافت داده‌ها');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   fetchManufacturingData();
    // }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div id="chart">
            {/* <ReactApexChart options={options} series={[{ data: seriesData }]} type="heatmap" height={350} /> */}
        </div>
    );
};

export default HeatMapChart;
