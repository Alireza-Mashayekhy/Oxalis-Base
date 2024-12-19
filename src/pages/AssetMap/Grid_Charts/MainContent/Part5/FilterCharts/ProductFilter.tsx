import './style.css';

import { useDispatch, useSelector } from 'react-redux';

import { resetFilters,toggleproduct } from '@/redux/store/productFilterMan';
import { getManData } from '@/selectors/state';
import { RootState } from '@/types';

const ProductFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getManData);

    // Specify that products is an array of strings
    const products: string[] = Array.from(
        new Set(data.map((item) => item.product))
    );

    const selectedproducts = useSelector(
        (state: RootState) => state.productsFilterMan.selectedProducts
    );

    const handleToggle = (product: string) => {
        dispatch(toggleproduct(product));
    };

    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="filter">
            {products.map(
                (
                    product: string // Specify that product is a string
                ) => (
                    <button
                        className="filterButton"
                        key={product} // product is now definitely a string
                        onClick={() => handleToggle(product)}
                        style={{
                            opacity: selectedproducts.includes(product)
                                ? '0.7'
                                : '1',
                        }}
                    >
                        {product}
                    </button>
                )
            )}
            <button className="reset filterButton" onClick={handleReset}>
                حذف فیلتر محصول
            </button>
        </div>
    );
};

export default ProductFilter;
