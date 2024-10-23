import { AppDispatch } from '@/types';
import { setDepositeFrame } from '@/redux/store/depositeFrame';
import * as api from '@/api/depositeFrame';

export const fetchDepositeFrame =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);
            dispatch(setDepositeFrame(data));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
