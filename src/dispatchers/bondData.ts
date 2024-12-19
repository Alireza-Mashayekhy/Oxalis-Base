import { toast } from 'react-toastify';

import * as api from '@/api/bondData';
import {
    setBondsData,
    updateBondData,
    uploadBondFailure,
    uploadBondRequest,
    uploadBondSuccess,
} from '@/redux/store/bondData';
import { AppDispatch } from '@/types';
import { BondData } from '@/types';

export const fetchBondsData =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data: BondData[] = await api.getBondsData(filters);
            dispatch(setBondsData(data));
        } catch (error) {
            console.error(error);
            // toast.error("خطایی در گرفتن اطلاعات بانک‌ها زخ داده‌است");

            // Handle error if needed
        }
    };
export const updateBondDataBatch =
    (bankDataArray: BondData[]) => async (dispatch: AppDispatch) => {
        dispatch(uploadBondRequest());
        try {
            const updatedData = await api.updateBondDataBatch(bankDataArray);
            dispatch(uploadBondSuccess());
            dispatch(updateBondData(updatedData));
            toast.success('داده با موفقیت ثبت شده است');
        } catch (error) {
            console.error(error);
            dispatch(uploadBondFailure(error.message));
            toast.error('خطایی در ثبت رخ داده است');
            // Handle error if needed
        }
    };
