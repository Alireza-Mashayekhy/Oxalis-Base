import { AppDispatch } from '@/types';
import { setAllAssetesLoading, setAllAssets } from '@/redux/store/allassets';
import * as api from '@/api/allassets';

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
