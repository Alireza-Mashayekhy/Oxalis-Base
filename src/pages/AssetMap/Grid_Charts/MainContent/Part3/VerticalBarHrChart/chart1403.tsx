import './Style.css';

import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import BarChart from '@/components/BarChart';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import { getHrData } from '@/selectors/state';

import { fixedDepartments } from '../Filter_jobTitle/FilterConstants';

interface DepartmentSalary {
    department: string;
    averageSalary: number;
}

const ApexBarChart1403 = () => {
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
                return year === '1403' && isJobTitleIncluded;
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
                    سال 1403
                </h5>
                <BarChart labels={[]} datasets={series} />
            </div>
            <div id="html-dist" />
        </div>
    );
};

export default ApexBarChart1403;
