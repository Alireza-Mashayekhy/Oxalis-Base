import '../style.css';

import JobTitleFilter from '../Filter_jobTitle/index';
import ScatterHrChart1401 from './chart1401';
import ScatterHrChart1402 from './chart1402';
import ScatterHrChart1403 from './chart1403';

const ScatterHrChart = () => {
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
                    margin: '30px 0',
                    gap: '70px',
                }}
            >
                <ScatterHrChart1401 />
                <ScatterHrChart1402 />
                <ScatterHrChart1403 />
            </div>
        </>
    );
};
export default ScatterHrChart;
