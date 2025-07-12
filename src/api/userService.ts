import axios from '../utils/axios';
import type { User } from '../types/User';

export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get('/users');
  return response.data;
};

export const updateUser = async (_id: string, userData: Partial<User>): Promise<User> => {
  const response = await axios.put(`/users/${_id}`, userData);
  return response.data;
};

export const deleteUser = async (_id: string): Promise<void> => {
  await axios.delete(`/users/${_id}`);
};