import { AppDispatch } from '@/types';
import { setData } from '@/redux/store/data';
import * as api from '@/api/data';

export const fetchData =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);
            dispatch(setData(data));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
