import axios from 'axios';

import { BankPerFund } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/bankperfund`;

export const getData = async (filters?: Record<string, any>): Promise<BankPerFund[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: BankPerFund[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
