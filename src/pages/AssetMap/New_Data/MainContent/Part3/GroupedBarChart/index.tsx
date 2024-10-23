import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { getHRData } from '@/api/new_data';
import { HRData } from '@/types/new_data';
import './Style.css';

interface Series {
    name: string;
    data: number[];
}

const ApexChart: React.FC = () => {
    const [hrData, setHrData] = useState<HRData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHRData = async () => {
            try {
                const data = await getHRData();
                console.log(data);
                setHrData(data);
            } catch (err) {
                console.error(err);
                setError('خطا در دریافت داده‌ها');
            } finally {
                setLoading(false);
            }
        };

        fetchHRData();
    }, []);

    const departments = [...new Set(hrData.map((item) => item.department))];
    const jobTitles = [...new Set(hrData.map((item) => item.job_title))];

    const seriesData: { name: string; data: number[] }[] = jobTitles.map(
        (jobTitle) => {
            const data = departments.map((department) => {
                const totalSalary = hrData
                    .filter(
                        (item) =>
                            item.department === department &&
                            item.job_title === jobTitle
                    )
                    .reduce((acc, current) => acc + current.salary, 0);
                return totalSalary;
            });
            return { name: jobTitle, data };
        }
    );

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 3,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
        },
        xaxis: {
            categories: departments,
            labels: {
                style: {
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
            },
        },
        yaxis: {
            title: {
                text: 'حقوق ( میلیون تومان)',
                style: {
                    fontFamily: 'IRANSans',
                    color: 'rgb(102, 102, 102)',
                },
                offsetX: -5,
            },
            labels: {
                align: 'center',
                padding: 0,
                style: {
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
                formatter: function (val) {
                    return (val / 1000000).toFixed(1).toLocaleString();
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const value = series[seriesIndex][dataPointIndex];
                const jobTitle = w.globals.seriesNames[seriesIndex];
                const department = w.globals.labels[dataPointIndex];
                return `
              <div class="custom-tooltip">
                <strong>عنوان شغل: ${jobTitle}</strong><br />
                <strong>بخش: ${department}</strong><br />
                <strong>حقوق:  ${value} تومان</strong>
              </div>
            `;
            },
        },
        legend: {
            fontSize: '10px',
            fontFamily: 'IRANSans',
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={seriesData}
                    type="bar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};
export default ApexChart;
