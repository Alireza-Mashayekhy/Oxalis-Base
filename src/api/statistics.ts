import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/ddn`;

export const exportStatistics = async (params) => {
    try {
        const url = `${BASE_URL}/ddnhistories/analyze/`;
        const response = await axios.get(url, { params, responseType: 'blob' });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getStatistics = async (params) => {
    try {
        const url = `${BASE_URL}/ddnhistories/analyze/`;
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
