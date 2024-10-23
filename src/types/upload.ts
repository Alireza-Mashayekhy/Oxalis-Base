export interface UploadStatus {
    data: Array<string>;
    loading: boolean;
    error: string | null;
    fileType: string;
}
