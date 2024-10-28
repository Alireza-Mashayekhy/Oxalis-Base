import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import './Style.css';

interface DepartmentSalary {
    department: string;
    averageSalary: number;
}

const ApexBarChart = () => {
    const data = useSelector(getHrData);
    const [departmentSalaries, setDepartmentSalaries] = useState<
        DepartmentSalary[]
    >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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

            data.forEach(({ department, job_title, salary }) => {
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
    }, [data]);

    const series = [
        {
            data: departmentSalaries.map((department) =>
                Math.floor(department.averageSalary)
            ), // حذف قسمت اعشاری
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
            categories: departmentSalaries.map(
                (department) => department.department
            ),
            labels: {
                style: {
                    cssClass: 'xaxis',
                    fontFamily: 'IRANSans',
                    colors: 'rgb(102, 102, 102)',
                },
                formatter: function (value: string) {
                    const numericValue = Number(value); // تبدیل به عدد
                    return (numericValue / 1000000).toFixed(1).toLocaleString();
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
                },
            },
        },
        colors: ['#0088fe', '#00c49f'],
    };

    return (
        <div>
            {loading && <p>در حال بارگذاری داده‌ها...</p>}
            {error && <p>{error}</p>}
            <div id="chart">
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

export default ApexBarChart;
