import { AppDispatch } from '@/types';
import {
    setBankData,
    updateBankData,
    uploadBankFailure,
    uploadBankRequest,
    uploadBankSuccess,
} from '@/redux/store/bankData';
import * as api from '@/api/bankData';
import { BankData } from '@/types';
import { toast } from 'react-toastify';

export const fetchBankData =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data: BankData[] = await api.getBankData(filters);
            dispatch(setBankData(data));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };

export const updateBankDataBatch =
    (bankDataArray: BankData[]) => async (dispatch: AppDispatch) => {
        dispatch(uploadBankRequest());
        try {
            const updatedData = await api.updateBankDataBatch(bankDataArray);
            dispatch(updateBankData(updatedData));
            dispatch(uploadBankSuccess());
            toast.success('داده با موفقیت ثبت شده است');
        } catch (error) {
            toast.error('مشکلی در ارسال داده‌ها رخ داده است');
            dispatch(uploadBankFailure(error.message));
            console.error(error);
            toast.error('خطایی در ثبت رخ داده است');
        }
    };
