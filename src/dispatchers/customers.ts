import { toast } from 'react-toastify';

import * as api from '@/api/customers';
import {
    customersFailure,
    customersRequest,
    customersSuccess,
    setCustomersData,
} from '@/redux/store/customersData';
import { AppDispatch, Customers } from '@/types';

export const fetchCustomersData = () => async (dispatch: AppDispatch) => {
    dispatch(customersRequest());
    try {
        const data: Customers[] = await api.getCustomersData();
        dispatch(setCustomersData(data));
        dispatch(customersSuccess());
    } catch (error) {
        toast.error('مشکلی در ارسال داده‌ها رخ داده است');
        dispatch(customersFailure(error.message));
        console.error(error);
        toast.error('خطایی در ثبت رخ داده است');
    }
};
