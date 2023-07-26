import axios from 'axios';
import { UserId } from '../../type/types';

//const API_URL = 'http://localhost:8000'; // Update with API endpoint
const API_URL = "https://backend-szom.onrender.com"

export const getOrder = async (userId:string | null) => {
  const response = await axios.get(`${API_URL}/order/${userId}`);
  return response.data;
};

export const createOrder = async (product:UserId) => {
  const response = await axios.post(`${API_URL}/order`, product);
  return response.data;
};

