import { AppDispatch } from '@/types';
import { setBankPerFund } from '@/redux/store/bankperfund';
import * as api from '@/api/bankperfund';

export const fetchBankPerFund =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);
            dispatch(setBankPerFund(data));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
