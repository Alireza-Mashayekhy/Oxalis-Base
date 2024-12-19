import './Style.css';

import { useEffect,useState } from 'react';

import { getHRData } from '@/api/new_data';
import BarChart from '@/components/BarChart';
import { HRData } from '@/types/new_data';

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

    return (
        <div>
            <div id="chart">
                <BarChart labels={[]} datasets={seriesData} />
            </div>
            <div id="html-dist" />
        </div>
    );
};
export default ApexChart;
