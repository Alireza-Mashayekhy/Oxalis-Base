import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { SalesData } from '@/types/new_data';
import { ApexOptions } from 'apexcharts';
import './Style.css';
import { useSelector } from 'react-redux';
import { getSalesData } from '@/selectors/state';

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
    const options: ApexOptions = {
        chart: {
            height: 350,
            width: '100%',
            type: 'bubble',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 0.8,
        },
        xaxis: {
            type: 'numeric',
            labels: {
                style: {
                    cssClass: 'xaxis',
                    colors: 'rgb(102, 102, 102)',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    fontFamily: 'IRANSans',
                },
                rotate: 0,
                formatter: function (value: string) {
                    const numericValue = Number(value); // تبدیل به عدد
                    return new Intl.NumberFormat('fa-IR').format(
                        numericValue / 1000000
                    );
                },
            },

            title: {
                text: 'مجموع درآمد (میلیون تومان)',
                style: {
                    fontSize: '12px',
                    color: 'rgb(102, 102, 102)',
                    fontFamily: 'IRANSans',
                    fontWeight: 'normal',
                },
            },
        },
        yaxis: {
            max: 50,
            labels: {
                align: 'center',
                style: {
                    fontSize: '12px',
                    fontFamily: 'IRANSans',
                },
                formatter: (value) => {
                    return Math.floor(value).toString(); // تبدیل به رشته
                },
            },
            title: {
                text: '  حاشیه سود (%)',
                style: {
                    fontSize: '12px',
                    fontFamily: 'IRANSans',
                },
                offsetY: 0,
                offsetX: -80,
            },
        },
        legend: {
            show: true,
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontFamily: 'IRANSans',
            },
            custom: ({ dataPointIndex }) => {
                const product = filteredData[dataPointIndex].product;
                const quantity =
                    filteredData[dataPointIndex].quantity_sold.toLocaleString();
                const revenue = Math.floor(
                    filteredData[dataPointIndex].revenue
                ).toLocaleString();
                const marginProfit =
                    filteredData[dataPointIndex].marginProfit.toFixed(2);

                return `
          <div class="custom-tooltip">
            <strong>محصول:</strong> ${product}<br/>
            <strong>تعداد فروش:</strong> ${quantity}<br/>
            <strong>مجموع درآمد:</strong> ${revenue} تومان<br/>
            <strong>حاشیه سود:</strong> ${marginProfit}%
          </div>
        `;
            },
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={[{ name: 'Sales Data', data: series }]}
                    type="bubble"
                    height={350}
                />
            </div>
        </div>
    );
};

export default ApexChart;
