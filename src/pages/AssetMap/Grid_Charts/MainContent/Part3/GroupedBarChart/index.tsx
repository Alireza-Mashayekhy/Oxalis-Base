import ApexGoupedBarChart1402 from './chart1402';
import ApexGoupedBarChart1401 from './chart1401';
import ApexGoupedBarChart1403 from './chart1403';
import JobTitleFilter from '../Filter_jobTitle/index';
import '../style.css';

const ApexGoupedBarChart = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                }}
            >
                <JobTitleFilter />
            </div>
            <div
                className="chartontainer"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: '30px 0',
                    gap: '70px',
                }}
            >
                <ApexGoupedBarChart1401 />
                <ApexGoupedBarChart1402 />
                <ApexGoupedBarChart1403 />
            </div>
        </>
    );
};
export default ApexGoupedBarChart;
