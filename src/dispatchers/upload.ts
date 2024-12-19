import { toast } from 'react-toastify';

import * as api from '@/api/upload';
import {
    setUploadData,
    uploadFailure,
    uploadRequest,
    uploadSuccess,
} from '@/redux/store/uploadData';
import { AppDispatch } from '@/types';
import { UploadStatus } from '@/types';

export const fetchUploadData = () => async (dispatch: AppDispatch) => {
    dispatch(uploadRequest());
    try {
        const data: UploadStatus[] = await api.getUploadData();
        dispatch(setUploadData(data));
        dispatch(uploadSuccess());
    } catch (error) {
        toast.error('مشکلی در ارسال داده‌ها رخ داده است');
        dispatch(uploadFailure(error.message));
        console.error(error);
        toast.error('خطایی در ثبت رخ داده است');
    }
};
