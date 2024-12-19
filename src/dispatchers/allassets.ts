import * as api from '@/api/allassets';
import { setAllAssetesLoading, setAllAssets } from '@/redux/store/allassets';
import { AppDispatch } from '@/types';

export const fetchAllAssets =
    (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
        dispatch(setAllAssetesLoading(true));
        try {
            const data = await api.getData(filters);
            dispatch(setAllAssets(data));
            dispatch(setAllAssetesLoading(false));
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };
