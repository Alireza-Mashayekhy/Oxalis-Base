import axios from 'axios';

import { BankData } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/bank-accounts`;

export const getBankData = async (filters?: Record<string, any>): Promise<BankData[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: BankData[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات بانک‌ها رخ داده‌است");

    throw error;
  }
};

export const updateBankDataBatch = async (bankDataArray: BankData[]): Promise<BankData[]> => {
  try {
    const url = `${BASE_URL}/batch-update/`; 
    const response = await axios.put<{ status: string, data: BankData[] }>(url, bankDataArray);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};