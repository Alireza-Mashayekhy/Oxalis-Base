import { useSelector, useDispatch } from 'react-redux';
import { toggleJobTitle, resetFilters } from '@/redux/store/jobTitleFilterHr';
import { getHrData } from '@/selectors/state';
import './style.css';
import { RootState } from '@/types';

const JobTitleFilter: React.FC = () => {
    const dispatch = useDispatch();
    const hrData = useSelector(getHrData);
    const filteredJobTitles = useSelector(
        (state: RootState) => state.jobTitleFilter.filteredJobTitles
    );

    const uniqueJobTitles = [...new Set(hrData.map((item) => item.job_title))];

    const handleToggle = (jobTitle: string) => {
        dispatch(toggleJobTitle(jobTitle));
    };

    const handleClearFilter = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="filter">
            <span>فیلتر داینامیک:</span>
            {uniqueJobTitles.map((jobTitle: string) => (
                <button
                    key={jobTitle}
                    onClick={() => handleToggle(jobTitle)}
                    style={{
                        opacity: filteredJobTitles.includes(jobTitle)
                            ? '0.7'
                            : '1',
                        margin: '5px',
                    }}
                >
                    {jobTitle}
                </button>
            ))}

            <button onClick={handleClearFilter} className="reset">
                حذف فیلتر
            </button>
        </div>
    );
};

export default JobTitleFilter;
