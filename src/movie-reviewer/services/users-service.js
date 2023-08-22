
import axios from 'axios';
const API_BASE_URL = 'http://localhost:4000/api';

export const fetchUserByIdApi = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
