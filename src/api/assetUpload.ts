import axios from 'axios';

export const uploadFiles = async (files: FileList): Promise<void> => {
    try {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        await axios.post<void>(
            `${import.meta.env.VITE_APP_API_URL_SECOND}/api/assetmap/upload/`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getHistory = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_APP_API_URL_SECOND}/api/assetmap/xmlstatus/`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
