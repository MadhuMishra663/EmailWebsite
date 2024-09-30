import axios from 'axios';

export const getAllEmails = async () => {
  try {
    const { data } = await axios.get('/onebox/list');
    return data;
  } catch (error) {
    console.error('Error fetching emails:', error);
  }
};

export const deleteEmail = async (id) => {
  try {
    await axios.delete(`/onebox/${id}`);
  } catch (error) {
    console.error('Error deleting email:', error);
  }
};
