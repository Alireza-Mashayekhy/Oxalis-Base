import axios from 'axios';
import { Event } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/events`;

export const logEvent = async (event: Event): Promise<Event> => {
  try {
    const response = await axios.post<Event>(`${BASE_URL}/log/`, event);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};