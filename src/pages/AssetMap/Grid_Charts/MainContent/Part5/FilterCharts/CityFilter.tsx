import './style.css';

import { useDispatch, useSelector } from 'react-redux';

import { clearCitiesFilter,toggleCity } from '@/redux/store/citiesFilterMan';
import { getManData } from '@/selectors/state';
import { RootState } from '@/types';
const CityFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getManData);
    const cities = Array.from(new Set(data.map((item) => item.city)));

    const selectedCities = useSelector(
        (state: RootState) => state.citiesFilterMan.selectedCities
    );

    const handleToggle = (city: string) => {
        dispatch(toggleCity(city));
    };
    const handleClearFilter = () => {
        dispatch(clearCitiesFilter());
    };
    return (
        <div className="filter">
            {cities.map((city: string) => (
                <button
                    className="filterButton"
                    key={city}
                    onClick={() => handleToggle(city)}
                    style={{
                        opacity: selectedCities.includes(city) ? '0.6' : '1',
                    }}
                >
                    {city}
                </button>
            ))}
            <button className="reset filterButton" onClick={handleClearFilter}>
                حذف فیلتر شهر
            </button>
        </div>
    );
};

export default CityFilter;
