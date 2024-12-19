import '../style.css';

import JobTitleFilter from '../Filter_jobTitle/index';
import ApexBarChart1401 from './chart1401';
import ApexBarChart1402 from './chart1402';
import ApexBarChart1403 from './chart1403';

const ApexBarChart = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <JobTitleFilter />
            </div>
            <div
                className="chartontainer"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '70px',
                }}
            >
                <ApexBarChart1401 />
                <ApexBarChart1402 />
                <ApexBarChart1403 />
            </div>
        </>
    );
};
export default ApexBarChart;
