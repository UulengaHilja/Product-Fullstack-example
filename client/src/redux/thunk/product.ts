import axios from 'axios';
import { Product } from '../../type/types';

//const API_URL = 'http://localhost:8000'; // Update with your API endpoint
const API_URL = "https://backend-szom.onrender.com"

export const fetchProductsData = async () => {
  const response = await axios.get(`${API_URL}/product`);
  return response.data;
};

export const createProduct = async (product:Product) => {
  const response = await axios.post(`${API_URL}/product`, product);
  return response.data;
};

