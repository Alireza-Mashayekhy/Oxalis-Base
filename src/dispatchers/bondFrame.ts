import { AppDispatch } from '@/types';
import { setBondFrame, setFilters } from '@/redux/store/bondFrame';
import * as api from '@/api/bondFrame';

export const fetchBondFrame =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);

            dispatch(setBondFrame(data));
            dispatch(setFilters(filters));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
