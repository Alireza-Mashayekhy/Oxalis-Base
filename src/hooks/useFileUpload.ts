import { useSelector } from 'react-redux';

import { getFileUploadStatus } from '@/selectors/state';
import { RootState, UploadStatus } from '@/types';
const useFileUpload = (): UploadStatus => {
    const uploadStatus = useSelector((state: RootState) =>
        getFileUploadStatus(state)
    );

    return uploadStatus;
};

export default useFileUpload;
