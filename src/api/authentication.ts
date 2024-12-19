import axios from 'axios';

import { getRefreshToken } from '@/utils/authentication';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL_SECOND}/api`;

export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/token/`, data);
        // const response = await axios.post(`${BASE_URL}/api/login`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/token/blacklist/`, {
            refresh: getRefreshToken(),
        });
        return response.data;
    } catch (error) {
        console.error(error);
        // toast.error("خطایی در خروج کاربر رخ داده است");
        throw error;
    }
};

export const sendOtp = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/entry/`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const submitOtp = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/verify-otp/`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
