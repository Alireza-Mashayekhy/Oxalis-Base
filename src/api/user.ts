import axios from "axios";

import {
  CreateUserRequest,
  CreateUserResponse,
  UserReadSerializer,
} from "@/types";
import {
  authorizationFormHeaders,
  authorizationHeaders,
} from "@/utils/authentication";


const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/users`;

export const createUser = async (
  data: CreateUserRequest
): Promise<CreateUserResponse> => {
  try {
    const response = await axios.post<CreateUserResponse>(BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در ایجاد کاربر رخ داده است");

    throw error;
  }
};

export const getUser = async (id: number): Promise<UserReadSerializer> => {
  try {
    const response = await axios.get<UserReadSerializer>(
      `${BASE_URL}/${id}`,
      authorizationHeaders()
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن کاربر رخ داده است");

    throw error;
  }
};

export const updateUser = async (
  id: number,
  data: FormData
): Promise<UserReadSerializer> => {
  try {
    console.log(data);
    const response = await axios.patch<UserReadSerializer>(
      `${BASE_URL}/${id}`,
      data,
      authorizationFormHeaders()
    );
    return response.data;
  } catch (error) {
    // toast.error("خطایی در بروزرسانی کاربران رخ داده است");

    console.error(error);
    throw error;
  }
};
export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete<void>(`${BASE_URL}/${id}`, authorizationHeaders());
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در حذف کاربر رخ داده است");

    throw error;
  }
};

export const getAllUsers = async (): Promise<UserReadSerializer[]> => {
  try {
    const response = await axios.get<UserReadSerializer[]>(
      `${BASE_URL}/allusers`,
      authorizationHeaders()
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // toast.error("خطایی در گرفتن لیست کاربران رخ داده است");

    throw error;
  }
};

export const getAllUsersExceptCurrent = async (
  currentUserId: number
): Promise<UserReadSerializer[]> => {
  try {
    const response = await axios.get<UserReadSerializer[]>(
      `${BASE_URL}/allusers`
    );
    const allUsers = response.data;
    // Filter out the current user
    const filteredUsers = allUsers.filter((user) => user.id !== currentUserId);
    return filteredUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    // toast.error("خطایی در گرفتن کاربران رخ داده است");

    throw error;
  }
};
