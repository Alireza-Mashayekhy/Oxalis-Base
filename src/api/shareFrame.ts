import axios from 'axios';
import { ShareFrame } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/shares_frame`;

export const getData = async (filters?: Record<string, any>): Promise<ShareFrame[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: ShareFrame[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
