import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import { fixedDepartments } from '../Filter_jobTitle/FilterConstants';
import './Style.css';
import BarChart from '@/components/BarChart';

interface DepartmentSalary {
    department: string;
    averageSalary: number;
}

const ApexBarChart1401 = () => {
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
                return year === '1401' && isJobTitleIncluded;
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
            name: '',
            data: sortedDepartmentSalaries.map((avgSalary) =>
                Math.floor(avgSalary)
            ),
        },
    ];

    return (
        <div>
            {error && <p>{error}</p>}
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1401
                </h5>
                <BarChart labels={[]} datasets={series} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexBarChart1401;
