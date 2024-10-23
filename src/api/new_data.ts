import axios from 'axios';
import { SalesData ,ManufacturingData ,FinancialData,HRData} from '@/types';

const BASE_SALES_URL = `${import.meta.env.VITE_APP_API_URL}/api/sales-data`;
const BASE_HR_URL = `${import.meta.env.VITE_APP_API_URL}/api/hr-data`;
const BASE_FIN_URL = `${import.meta.env.VITE_APP_API_URL}/api/financial-data`;
const BASE_MAN_URL = `${import.meta.env.VITE_APP_API_URL}/api/manufacturing-data`;

export const getSalesData = async (filters?: Record<string, any>): Promise<SalesData[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${BASE_SALES_URL}?${queryParams}`;
    const response = await axios.get<{ status: string, data: SalesData[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
export const getSales3monthsData = async (): Promise<SalesData[]> => {
  try {
    const url = `${BASE_SALES_URL}/last_3_months`;
    const response = await axios.get<{ status: string, data: SalesData[] }>(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
    
    throw error;
  }
};
export const getFinanceData = async (filters?: Record<string, any>): Promise<FinancialData[]> => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const url = `${BASE_FIN_URL}?${queryParams}`;
      const response = await axios.get<{ status: string, data: FinancialData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };
  export const getFinance3monthsData = async (): Promise<FinancialData[]> => {
    try {
      const url = `${BASE_FIN_URL}/last_3_months`;
      const response = await axios.get<{ status: string, data: FinancialData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };

  export const getHRData = async (filters?: Record<string, any>): Promise<HRData[]> => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const url = `${BASE_HR_URL}?${queryParams}`;
      const response = await axios.get<{ status: string, data: HRData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };
  export const getHR3monthsData = async (): Promise<HRData[]> => {
    try {
      const url = `${BASE_HR_URL}/last_3_months`;
      const response = await axios.get<{ status: string, data: HRData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };
  export const getManData = async (filters?: Record<string, any>): Promise<ManufacturingData[]> => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const url = `${BASE_MAN_URL}?${queryParams}`;
      const response = await axios.get<{ status: string, data: ManufacturingData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };
  export const getMan3monthsData = async (): Promise<ManufacturingData[]> => {
    try {
      const url = `${BASE_MAN_URL}/last_3_months`;
      const response = await axios.get<{ status: string, data: ManufacturingData[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(error);
      // toast.error("خطایی در گرفتن اطلاعات رخ داده‌است");
      
      throw error;
    }
  };