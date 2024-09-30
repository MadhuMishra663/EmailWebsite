import axios from 'axios';

// Set the base URL for your backend
const API_BASE_URL = 'http://localhost:5000'; // Adjust this if needed

export const loginUser = async (form) => {
  try {
    // Make sure the form is sending the correct email and password fields
    const { data } = await axios.post(`${API_BASE_URL}/auth/login`, form);

    // Check if token is returned
    if (data.token) {
      localStorage.setItem('token', data.token);
      return true;
    } else {
      console.error('No token returned from the server');
      return false;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return false;
  }
};

export const registerUser = async (form) => {
  try {
    await axios.post('/auth/register', form);
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

