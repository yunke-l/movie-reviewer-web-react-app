import axios from 'axios';
const API_BASE = 'http://localhost:4000/api'
const user_API = `${API_BASE}/users`;


export const findUserById  = async (userID)     => {
  const response = await axios.get(`${user_API}/${userID}`);
  const users = response.data; 
  return users;
}

