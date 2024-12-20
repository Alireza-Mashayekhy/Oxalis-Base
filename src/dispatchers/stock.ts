import { toast } from 'react-toastify';

import * as api from '@/api/stock';
import {
    setStockData,
    stockFailure,
    stockRequest,
    stockSuccess,
} from '@/redux/store/stockData';
import { AppDispatch, Stock } from '@/types';

export const fetchStockData = () => async (dispatch: AppDispatch) => {
    dispatch(stockRequest());
    try {
        const data: Stock[] = await api.getStock();
        dispatch(setStockData(data));
        dispatch(stockSuccess());
    } catch (error) {
        toast.error('مشکلی در ارسال داده‌ها رخ داده است');
        dispatch(stockFailure(error.message));
        console.error(error);
        toast.error('خطایی در ثبت رخ داده است');
    }
};
