import { uploadFiles as _uploadFiles } from '@/api/assetUpload';
import { getHistory as _getHistory } from '@/api/assetUpload';
import { AppDispatch } from '@/types';
import {
    uploadFileRequest,
    uploadFileSuccess,
    uploadFileFailure,
    setFileUploadTpe,
    setHistory,
} from '@/redux/store/assetUpload';
import { toast } from 'react-toastify';

export const uploadFiles =
    (files: FileList) => async (dispatch: AppDispatch) => {
        dispatch(uploadFileRequest());

        try {
            await _uploadFiles(files);
            dispatch(uploadFileSuccess());
            dispatch(setFileUploadTpe(''));
            toast.success('فایل ها با موفقیت آپلود شدند');
            dispatch(getHistory());
        } catch (error) {
            dispatch(uploadFileFailure(error.message));
            toast.error('خطایی در آپلود فایل رخ داده است');
        }
    };

export const getHistory = () => async (dispatch) => {
    try {
        const data = await _getHistory();
        dispatch(setHistory(data));
    } catch (error) {
        console.error(error);
    }
};
