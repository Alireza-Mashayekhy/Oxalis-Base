import axios from 'axios';
import { Data } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/data`;

export const getData = async (filters?: Record<string, any>): Promise<Data[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: Data[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
