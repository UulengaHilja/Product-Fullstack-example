import axios from 'axios';
import { CartItem, UserId } from '../../type/types';

//const API_URL = 'http://localhost:8000'; // Update with API endpoint
const API_URL = "https://backend-szom.onrender.com"

export const getCart = async (userId:string | null) => {
  const response = await axios.get(`${API_URL}/cart/${userId}`);
  return response.data;
};

export const createCart = async (product:UserId) => {
  const response = await axios.post(`${API_URL}/cart`, product);
  return response.data;
};

