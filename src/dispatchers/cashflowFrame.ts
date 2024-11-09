import { AppDispatch } from '@/types';
import { setcashflowFrame, setFilters } from '@/redux/store/cashflowFrame';
import * as api from '@/api/cashflowFrame';

export const fetchCashFlowFrame =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        try {
            const data = await api.getData(filters);
            dispatch(setcashflowFrame(data));
            dispatch(setFilters(filters));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
