import axios from 'axios';

const MockProfile = {
  fakeData: async () => {
    const baseURL = 'https://9caa-45-71-76-157.ngrok-free.app';
    const profileAccess = baseURL + '/api/v1/user';

    try {
      const response = await axios.get(profileAccess);
      return response.data;
    } catch (error) {
      console.error('error:', error);
      return null;
    }
  },
};

export default MockProfile;
