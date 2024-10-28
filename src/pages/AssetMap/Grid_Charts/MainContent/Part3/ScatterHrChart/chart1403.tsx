import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import { HRData } from '@/types/new_data';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import {
    fixedDepartments,
    fixedJobTitles,
} from '../Filter_jobTitle/FilterConstants';

const getFillColor = (job_title) => {
    switch (job_title) {
        case 'دستیار':
            return '#008ffb';
        case 'متخصص':
            return '#ff8042';
        case 'مدیر':
            return '#00e396';
        case 'اپراتور':
            return '#F4B400';
        case 'سرپرست':
            return '#f55074';
        default:
            return '#0088fe';
    }
};

type SeriesData = {
    name: string;
    data: { x: number; y: number; z: number }[];
};

const ApexChart = () => {
    const data = useSelector(getHrData);
    const filteredJobTitles = useSelector(selectFilteredJobTitles);
    const [series, setSeries] = useState<SeriesData[]>([]);

    useEffect(() => {
        if (data.length > 0) {
            const dataForYear = data.filter((item) => {
                const year = parseInt(item.hire_date_jalali.split('/')[0]);
                return year === 1403;
            });

            const finalFilteredData =
                filteredJobTitles.length === 0
                    ? dataForYear
                    : dataForYear.filter(
                          (item) => !filteredJobTitles.includes(item.job_title)
                      );

            const groupedData = finalFilteredData.reduce((acc, curr) => {
                if (!acc[curr.job_title]) {
                    acc[curr.job_title] = {
                        name: curr.job_title,
                        data: [],
                    };
                }
                acc[curr.job_title].data.push({
                    x: curr.performance_score,
                    y: curr.total_payment,
                    z: (curr.training_hours / 1000) * 0.05,
                });
                return acc;
            }, {});

            const unsortedSeries = Object.values(groupedData) as SeriesData[];
            const orderedSeries = fixedJobTitles
                .map((jobTitle) =>
                    unsortedSeries.find((series) => series.name === jobTitle)
                )
                .filter((item) => item !== undefined);
            setSeries(orderedSeries);
        }
    }, [data, filteredJobTitles]);

    const options = {
        chart: {
            height: 450,
            type: 'bubble' as const,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bubble: {
                zScaling: true,
                minBubbleRadius: 1,
                maxBubbleRadius: 13,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 0.9,
            colors: series.map((item) => getFillColor(item.name)),
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const jobTitle = w.globals.seriesNames[seriesIndex];
                const value =
                    series[seriesIndex][dataPointIndex].toLocaleString();
                return `
          <div class="custom-tooltip">
            <strong>عنوان شغل: ${jobTitle}</strong><br />
            <strong>حقوق:  ${value} تومان</strong>
          </div>
        `;
            },
        },
        xaxis: {
            title: {
                text: 'امتیاز عملکرد',
                style: {
                    fontFamily: 'IRANSans',
                },
            },
            labels: {
                formatter: (val) => val.toFixed(1),
            },
        },
        yaxis: {
            title: {
                text: 'مجموع پرداختی (میلیون تومان)',
                style: {
                    fontFamily: 'IRANSans',
                },
            },
            labels: {
                formatter: (val) => (val / 1000000).toFixed(1),
            },
            max: Math.max(...data.map((item) => item.total_payment), 0),
        },
        legend: {
            position: 'bottom' as const, // مقدار center به bottom تغییر یافت
            horizontalAlign: 'center' as const, // این گزینه بدون مشکل باقی می‌ماند
        },
    };

    return (
        <div>
            <h5 style={{ textAlign: 'center', color: '#808080' }}>سال 1403</h5>
            <ReactApexChart
                options={options}
                series={series}
                type="bubble"
                height={450}
            />
        </div>
    );
};

export default ApexChart;
