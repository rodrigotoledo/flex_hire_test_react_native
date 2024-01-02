import axios from 'axios';

const MockProfile = {
  fakeData: async () => {
    const baseURL = 'https://73c8-186-233-160-19.ngrok-free.app';
    const profileAccess = baseURL + '/api/v1/profile';

    try {
      const response = await axios.get(profileAccess);
      return response.data.data.data;
    } catch (error) {
      console.error('error:', error);
      console.error('Error consuming ngrok api data:', userData);
      return null;
    }
  },
};

export default MockProfile;
