import axios from 'axios';

import { BondData } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/bonds`;

export const getBondsData = async (filters?: Record<string, any>): Promise<BondData[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: BondData[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات بانک‌ها رخ داده‌است");
    
    throw error;
  }
};
export const updateBondDataBatch = async (bondDataArray: BondData[]): Promise<BondData[]> => {
  try {
    const url = `${BASE_URL}/batch-update/`; 
    const response = await axios.put<{ status: string, data: BondData[] }>(url, bondDataArray);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};