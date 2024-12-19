import * as api from "@/api/depositeFrame";
import { setDepositeFrame, setFilters } from "@/redux/store/depositeFrame";
import { AppDispatch } from "@/types";

export const fetchDepositeFrame =
  (filters?: Record<string, any>) => async (dispatch: AppDispatch) => {
    try {
      const data = await api.getData(filters);
      dispatch(setDepositeFrame(data));
      dispatch(setFilters(filters));
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };
