import axios from 'axios';

//const API_URL = 'http://localhost:8000'; // Update with your API endpoint
const API_URL = "https://backend-szom.onrender.com"

export const fetchUserInfo = async (userId:string | null) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  console.log("userinfo", response.data.userData)
  return response.data;
};

