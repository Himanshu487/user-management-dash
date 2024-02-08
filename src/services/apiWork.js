import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const apiWork = axios.create({
  baseURL: BASE_URL,
});

// Function to authenticate user
export const authenticateUser = async (email, password) => {
  try {
    const response = await apiWork.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to retrieve user data
// export const getUserData = async (userId) => {
export const getUserData = async () => {
  try {
    //   const response = await apiWork.get(`/users/${userId}`);
    const response = await apiWork.get(`/users`);
    
    return response.data;
    // return console.log(response.data);

  } catch (error) {
    throw error;
  }
};



