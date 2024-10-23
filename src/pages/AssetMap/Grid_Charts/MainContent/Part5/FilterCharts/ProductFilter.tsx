import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleproduct, resetFilters } from '@/redux/store/productFilterMan';
import { getManData } from '@/selectors/state';
import './style.css';
const ProductFilter: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getManData);
    const products = Array.from(new Set(data.map((item) => item.product)));

    const selectedproducts = useSelector(
        (state) => state.productsFilterMan.selectedProducts
    );

    const handleToggle = (product: string) => {
        dispatch(toggleproduct(product));
    };
    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="filter">
            {products.map((product) => (
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
            <button className="reset filterButton" onClick={handleReset}>
                حذف فیلتر محصول
            </button>
        </div>
    );
};

export default ProductFilter;
