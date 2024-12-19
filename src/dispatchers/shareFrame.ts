import * as api from "@/api/shareFrame";
import { setFilters, setShareFrame } from "@/redux/store/shareFrame";
import { AppDispatch } from "@/types";

export const fetchShareFrame =
  (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
    try {
      const data = await api.getData(filters);
      dispatch(setFilters(filters));
      dispatch(setShareFrame(data));
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };
