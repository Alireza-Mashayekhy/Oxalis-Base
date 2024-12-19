import { toast } from 'react-toastify';

import * as api from '@/api/investment';
import { setShareholders } from '@/redux/store/investmentData';
import { AppDispatch } from '@/types';

interface Summery {
    id: number;
    name: string;
    num_funds: string;
    total_value: number;
}
interface Shareholders {
    id: number;
    name: string;
    share_holder_histories: string;
}

export const fetchShareholdersData =
    (params) => async (dispatch: AppDispatch) => {
        try {
            const data: Shareholders[] = await api.getShareholders(params);
            dispatch(setShareholders(data));
        } catch (error) {
            toast.error('مشکلی در ارسال داده‌ها رخ داده است');
            console.error(error);
            toast.error('خطایی در ثبت رخ داده است');
        }
    };
