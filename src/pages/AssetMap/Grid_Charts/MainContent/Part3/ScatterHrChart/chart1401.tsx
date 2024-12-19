import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import BubbleChart from '@/components/BubbleChart';
import { selectFilteredJobTitles } from '@/redux/store/jobTitleFilterHr';
import { getHrData } from '@/selectors/state';
import { HRData } from '@/types/new_data';

import { fixedJobTitles } from '../Filter_jobTitle/FilterConstants';

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

    return (
        <div>
            <div id="chart">
                <h5 style={{ textAlign: 'center', color: '#808080' }}>
                    سال 1401
                </h5>
                <BubbleChart datasets={series} />
            </div>
            <div id="html-dist" />
        </div>
    );
};

export default ApexChart;
