import axios from 'axios';

import { Counter } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/counters`;

export const fetchCounters = async (): Promise<Counter[]> => {
  const response = await axios.get<Counter[]>(`${BASE_URL}/`);
  return response.data;
};

export const createCounter = async (counter: Omit<Counter, 'id'>): Promise<Counter> => {
  const response = await axios.post<Counter>(`${BASE_URL}/`, counter);
  return response.data;
};

export const updateCounter = async (id: string, counter: Partial<Counter>): Promise<Counter> => {
  const response = await axios.patch<Counter>(`${BASE_URL}/${id}/`, counter);
  return response.data;
};

export const deleteCounter = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}/`);
};