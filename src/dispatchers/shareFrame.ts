import { AppDispatch } from '@/types';
import { setShareFrame } from '@/redux/store/shareFrame';
import * as api from '@/api/shareFrame';

export const fetchShareFrame =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);
            dispatch(setShareFrame(data));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
