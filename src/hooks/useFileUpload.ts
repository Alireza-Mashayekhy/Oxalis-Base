import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { getFileUploadStatus } from '@/selectors/state';
import { UploadStatus } from '@/types';
const useFileUpload = (): UploadStatus => {
  const uploadStatus = useSelector((state: RootState) => getFileUploadStatus(state));

  return uploadStatus;
};

export default useFileUpload;