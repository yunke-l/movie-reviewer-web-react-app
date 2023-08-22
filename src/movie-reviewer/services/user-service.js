import axios from 'axios';
const API_BASE = 'http://localhost:4000/api'
const post_API = `${API_BASE}/users`;


export const findUserById  = async (userID)     => {
  const response = await axios.get(`${post_API}/${userID}`);
  const posts = response.data; 
  return posts;
}

