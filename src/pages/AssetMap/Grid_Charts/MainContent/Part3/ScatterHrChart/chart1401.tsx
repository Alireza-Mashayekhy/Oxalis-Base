import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import { HRData } from '@/types/new_data';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import { fixedJobTitles } from '../Filter_jobTitle/FilterConstants';
import colors from 'react-multi-date-picker/plugins/colors';

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
    const [filteredData, setFilteredData] = useState<HRData[]>([]);

    useEffect(() => {
        if (data.length > 0) {
            const dataForYear = data.filter((item) => {
                const year = parseInt(item.hire_date_jalali.split('/')[0]);
                return year === 1401;
            });

            const finalFilteredData =
                filteredJobTitles.length === 0
                    ? dataForYear
                    : dataForYear.filter(
                          (item) => !filteredJobTitles.includes(item.job_title)
                      );

            setFilteredData(finalFilteredData);

            const groupedData = finalFilteredData.reduce((acc, curr) => {
                const color = getFillColor(curr.job_title);
                if (!acc[curr.job_title]) {
                    acc[curr.job_title] = {
                        name: curr.job_title,
                        data: [],
                    };
                }
                acc[curr.job_title].data.push([
                    curr.performance_score,
                    curr.total_payment,
                    (curr.training_hours / 1000) * 0.05,
                ]);
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
            bubble: {
                maxBubbleSize: 5,
            },
            zoom: {
                enabled: false,
            },
            pan: {
                enabled: false,
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
                const performanceScore = series[seriesIndex][dataPointIndex][0];
                const value = series[seriesIndex][dataPointIndex];
                const formattedValue = value.toLocaleString();
                const jobTitle = w.globals.seriesNames[seriesIndex];
                return `  
          <div class="custom-tooltip">
            <strong>عنوان شغل: ${jobTitle}</strong><br />
            <strong>حقوق:  ${formattedValue} تومان</strong>
          </div>
        `;
            },
        },
        xaxis: {
            tickAmount: 6,
            title: {
                style: {
                    fontFamily: 'IRANSans',
                    color: 'rgb(102, 102, 102)',
                },
                text: 'امتیاز عملکرد',
            },
            labels: {
                formatter: (val) => {
                    return val.toFixed(1);
                },
                style: {
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
            },
        },
        yaxis: {
            tickAmount: 5,
            title: {
                text: 'مجموع پرداختی (میلیون تومان)',
                style: {
                    fontFamily: 'IRANSans',
                    color: 'rgb(102, 102, 102)',
                },
                offsetX: -5,
            },
            bubble: {
                minBubbleSize: 1,
                maxBubbleSize: 5,
            },
            labels: {
                align: 'center' as const,
                padding: 0,
                style: {
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
                formatter: function (val) {
                    return (val / 1000000).toFixed(1).toLocaleString();
                },
            },
            max:
                filteredData.length > 0
                    ? Math.max(
                          ...filteredData.map((item) => item.total_payment)
                      )
                    : 0,
        },
        legend: {
            position: 'bottom' as const,
            horizontalAlign: 'center' as const,
            floating: false,
            fontSize: '11px',
            fontFamily: 'IRANSans',
            formatter: (seriesName, opts) => {
                return `<span style="color: ${getFillColor(seriesName)}">${seriesName}</span>`;
            },
            markers: {
                size: 6,
                radius: 5,
            },
        },
    };

    return (
        <div>
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1401
                </h5>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bubble"
                    height={450}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
