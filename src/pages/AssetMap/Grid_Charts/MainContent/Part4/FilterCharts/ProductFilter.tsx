import { useDispatch, useSelector } from 'react-redux';
import { toggleproduct, resetFilters } from '@/redux/store/productsFilterSales';
import { getSalesData } from '@/selectors/state';
import './style.css';
import { RootState } from '@/types';

const ProductFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getSalesData);
    const products = Array.from(new Set(data.map((item) => item.product)));

    const selectedproducts = useSelector(
        (state: RootState) => state.productsFilter.selectedProducts
    );

    const handleToggle = (product: string) => {
        dispatch(toggleproduct(product));
    };
    const handleReset = () => {
        dispatch(resetFilters());
    };
    return (
        <div className="filter">
            {products.map((product: string) => (
                <button
                    className="filterButton"
                    key={product}
                    onClick={() => handleToggle(product)}
                    style={{
                        opacity: selectedproducts.includes(product)
                            ? '0.7'
                            : '1',
                    }}
                >
                    {product}
                </button>
            ))}
            <button onClick={handleReset} className="reset filterButton">
                حذف فیلتر محصول
            </button>
        </div>
    );
};

export default ProductFilter;
