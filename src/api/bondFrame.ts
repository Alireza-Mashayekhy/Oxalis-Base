import axios from 'axios';
import { BondFrame } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/bonds_frame`;

export const getData = async (filters?: Record<string, any>): Promise<BondFrame[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: BondFrame[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
