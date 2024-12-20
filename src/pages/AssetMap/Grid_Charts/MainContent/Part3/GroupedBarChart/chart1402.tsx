import './Style.css';

import { useSelector } from 'react-redux';

import BarChart from '@/components/BarChart';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import { getHrData } from '@/selectors/state';

import {
    fixedDepartments,
    fixedJobTitles,
} from '../Filter_jobTitle/FilterConstants';

const ApexGoupedBarChart1402: React.FC = () => {
    const hrData = useSelector(getHrData);
    const error = hrData.length ? null : 'خطا در دریافت داده‌ها';
    const filteredJobTitles = useSelector(selectFilteredJobTitles);

    const filteredHrData = hrData.filter((item) => {
        const year = parseInt(item.hire_date_jalali.split('/')[0]);
        return (
            year === 1402 &&
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

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1402
                </h5>
                <BarChart labels={[]} datasets={seriesData} />
            </div>
            <div id="html-dist" />
        </div>
    );
};

export default ApexGoupedBarChart1402;
