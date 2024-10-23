import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCity, clearCitiesFilter } from '@/redux/store/citiesFilterMan';
import { getManData } from '@/selectors/state';
import './style.css';
const CityFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getManData);
    const cities = Array.from(new Set(data.map((item) => item.city)));

    const selectedCities = useSelector(
        (state) => state.citiesFilterMan.selectedCities
    );

    const handleToggle = (city: string) => {
        dispatch(toggleCity(city));
    };
    const handleClearFilter = () => {
        dispatch(clearCitiesFilter());
    };
    return (
        <div className="filter">
            {cities.map((city) => (
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
