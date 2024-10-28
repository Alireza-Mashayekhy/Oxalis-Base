import { useState, useEffect } from 'react';
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

interface DepartmentSalary {
    department: string;
    averageSalary: number;
}

const ApexBarChart1402 = () => {
    const data = useSelector(getHrData);
    const [departmentSalaries, setDepartmentSalaries] = useState<
        DepartmentSalary[]
    >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const filteredJobTitles = useSelector(selectFilteredJobTitles);

    useEffect(() => {
        if (data.length === 0) {
            setError('هیچ داده‌ای موجود نیست.');
            setLoading(false);
            return;
        }

        try {
            const salaryByDepartment: {
                [key: string]: { totalSalary: number; jobTitles: Set<string> };
            } = {};

            const filteredData = data.filter((item) => {
                const year = item.hire_date_jalali.split('/')[0];
                const isJobTitleIncluded =
                    filteredJobTitles.length === 0 ||
                    !filteredJobTitles.includes(item.job_title);
                return year === '1402' && isJobTitleIncluded;
            });

            filteredData.forEach(({ department, job_title, salary }) => {
                if (!salaryByDepartment[department]) {
                    salaryByDepartment[department] = {
                        totalSalary: 0,
                        jobTitles: new Set(),
                    };
                }

                salaryByDepartment[department].totalSalary += salary;
                salaryByDepartment[department].jobTitles.add(job_title);
            });

            const averageSalaries = Object.entries(salaryByDepartment).map(
                ([department, { totalSalary, jobTitles }]) => ({
                    department,
                    averageSalary: totalSalary / jobTitles.size,
                })
            );

            setDepartmentSalaries(averageSalaries);
            console.log(averageSalaries);
        } catch (err) {
            console.error(err);
            setError('خطا در پردازش داده‌ها');
        } finally {
            setLoading(false);
        }
    }, [data, filteredJobTitles]);

    const sortedDepartmentSalaries = fixedDepartments.map((department) => {
        const found = departmentSalaries.find(
            (item) => item.department === department
        );
        return found ? found.averageSalary : 0;
    });

    const series = [
        {
            data: sortedDepartmentSalaries.map((avgSalary) =>
                Math.floor(avgSalary)
            ),
        },
    ];

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
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const averageSalary = Math.floor(
                    series[seriesIndex][dataPointIndex]
                );
                return `<div class="tooltip">
                  <span>میانگین حقوق</span>
                   ${averageSalary.toLocaleString() + ' تومان'} 
                </div>`;
            },
            fillSeriesColor: true,
        },
        xaxis: {
            tickAmount: 2,
            categories: fixedDepartments,
            labels: {
                style: {
                    cssClass: 'xaxis',
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
                formatter: function (val) {
                    return (Number(val) / 1000000).toFixed(1).toLocaleString();
                },
            },
            title: {
                text: 'میانگین حقوق (میلیون تومان)',
                style: {
                    fontFamily: 'IRANSans',
                    color: 'rgb(102, 102, 102)',
                },
            },
        },

        yaxis: {
            labels: {
                align: 'left',
                padding: 0,
                style: {
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
            },
        },
        colors: ['#0088fe', '#00c49f'],
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1402
                </h5>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexBarChart1402;
