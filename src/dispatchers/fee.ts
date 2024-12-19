import { toast } from 'react-toastify';

import * as api from '@/api/fee';
import {
    feeFailure,
    feeRequest,
    feeSuccess,
    setFeeData,
} from '@/redux/store/feeData';
import { AppDispatch, Fee } from '@/types';

export const fetchFeeData = () => async (dispatch: AppDispatch) => {
    dispatch(feeRequest());
    try {
        const data: Fee[] = await api.getFeeHistory();
        dispatch(setFeeData(data));
        dispatch(feeSuccess());
    } catch (error) {
        toast.error('مشکلی در ارسال داده‌ها رخ داده است');
        dispatch(feeFailure(error.message));
        console.error(error);
        toast.error('خطایی در ثبت رخ داده است');
    }
};
