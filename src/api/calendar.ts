import { CalendarResponse } from '@/types';
import axios from 'axios';

const BASE_URL = `${
    import.meta.env.VITE_APP_API_URL_SECOND
}/api/assetmap/dates`;

export const getCalendar = async () => {
    try {
        const response = await axios.get<CalendarResponse[]>(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
