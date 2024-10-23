import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UploadStatus } from '@/types';
import { UPLOAD } from '@/constants/store';

const initialState: UploadStatus = {
    data: [],
    loading: false,
    error: null,
    fileType: '',
};

const uploadSlice = createSlice({
    name: UPLOAD,
    initialState,
    reducers: {
        uploadFileRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        uploadFileSuccess: (state) => {
            state.loading = false;
        },
        uploadFileFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setFileUploadTpe: (state, action: PayloadAction<string>) => {
            state.fileType = action.payload;
        },
        setHistory: (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        },
    },
});

export const {
    uploadFileRequest,
    uploadFileSuccess,
    uploadFileFailure,
    setFileUploadTpe,
    setHistory,
} = uploadSlice.actions;
export default uploadSlice.reducer;
