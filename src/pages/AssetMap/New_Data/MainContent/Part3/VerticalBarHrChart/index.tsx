import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHrData } from '@/selectors/state';
import './Style.css';
import BarChart from '@/components/BarChart';

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
            name: '',
            data: departmentSalaries.map((department) =>
                Math.floor(department.averageSalary)
            ), // حذف قسمت اعشاری
        },
    ];

    return (
        <div>
            {loading && <p>در حال بارگذاری داده‌ها...</p>}
            {error && <p>{error}</p>}
            <div id="chart">
                <BarChart labels={[]} datasets={series} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexBarChart;
