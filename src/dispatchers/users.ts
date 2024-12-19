import { toast } from 'react-toastify';

import * as api from '@/api/users';
import {
    setUsersData,
    usersFailure,
    usersRequest,
    usersSuccess,
} from '@/redux/store/users';
import { AppDispatch, Users } from '@/types';

export const fetchUsersList = () => async (dispatch: AppDispatch) => {
    dispatch(usersRequest());
    try {
        const data: Users[] = await api.getUsersList(dispatch);
        dispatch(setUsersData(data));
        dispatch(usersSuccess());
    } catch (error) {
        toast.error('مشکلی در ارسال داده‌ها رخ داده است');
        dispatch(usersFailure(error.message));
        console.error(error);
        toast.error('خطایی در ثبت رخ داده است');
    }
};
