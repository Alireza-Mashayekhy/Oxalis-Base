import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import {
    fixedDepartments,
    fixedJobTitles,
} from '../Filter_jobTitle/FilterConstants';
import './Style.css';

const ApexGoupedBarChart1401: React.FC = () => {
    const hrData = useSelector(getHrData);
    const error = hrData.length ? null : 'خطا در دریافت داده‌ها';
    const filteredJobTitles = useSelector(selectFilteredJobTitles);

    const filteredHrData = hrData.filter((item) => {
        const year = parseInt(item.hire_date_jalali.split('/')[0]);
        return (
            year === 1401 &&
            (!filteredJobTitles.length ||
                !filteredJobTitles.includes(item.job_title))
        );
    });

    const departments = [
        ...new Set(filteredHrData.map((item) => item.department)),
    ];
    const jobTitles = [
        ...new Set(filteredHrData.map((item) => item.job_title)),
    ];

    const jobTitleColors = {
        مدیر: '#00e396',
        سرپرست: '#f55074',
        اپراتور: '#F4B400',
        دستیار: '#008ffb',
        متخصص: '#ff8042',
    };

    const seriesData: { name: string; data: number[] }[] = fixedJobTitles.map(
        (jobTitle: string) => {
            const data: number[] = fixedDepartments.map(
                (department: string) => {
                    const totalSalary = filteredHrData
                        .filter(
                            (item) =>
                                item.department === department &&
                                item.job_title === jobTitle
                        )
                        .reduce((acc, current) => acc + current.salary, 0);
                    return totalSalary;
                }
            );
            return {
                name: jobTitle as string,
                data,
                color: jobTitleColors[jobTitle],
            };
        }
    );

    const options: ApexOptions = {
        colors: jobTitles.map(
            (jobTitle) =>
                jobTitleColors[jobTitle as keyof typeof jobTitleColors]
        ),
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
            categories: fixedDepartments,
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
                const formattedValue = value.toLocaleString();
                const jobTitle = w.globals.seriesNames[seriesIndex];
                const department = w.globals.labels[dataPointIndex];
                return `  
                    <div class="custom-tooltip">
                        <strong>عنوان شغل: ${jobTitle}</strong><br />
                        <strong>بخش: ${department}</strong><br />
                        <strong>حقوق:  ${formattedValue} تومان</strong>
                    </div>
                `;
            },
        },
        legend: {
            fontSize: '10px',
            fontFamily: 'IRANSans',
        },
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1401
                </h5>
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

export default ApexGoupedBarChart1401;
