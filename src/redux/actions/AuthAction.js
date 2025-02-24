import {  createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axiosInstance';

export const register = createAsyncThunk(
  'auth/register',
  async (data) => {
    try {
    const response = await axiosInstance.post('/Auth/register',data);
    return response.data;

    } catch (error) {
      alert(error.response?.data?.message)
    }
  }
);

export const Userlogin = async (data) => {
  try {
    const response = await axiosInstance.post(`/Auth/Login?Email=${data.username}&Password=${data.password}`);
    return response.data;

    } catch (error) {
      console.log("erroe",error);
      alert(error.response?.data?.message)
    }  
};