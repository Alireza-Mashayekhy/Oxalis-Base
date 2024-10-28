import { useDispatch, useSelector } from 'react-redux';
import { toggleCity, clearCitiesFilter } from '@/redux/store/citiesFilterSales';
import { getSalesData } from '@/selectors/state';
import '../style.css';
import { RootState } from '@/types';

const CityFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getSalesData);
    const cities = Array.from(new Set(data.map((item) => item.city)));

    const selectedCities = useSelector(
        (state: RootState) => state.citiesFilter.selectedCities
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

            <button onClick={handleClearFilter} className="reset filterButton">
                حذف فیلتر شهر
            </button>
        </div>
    );
};

export default CityFilter;
