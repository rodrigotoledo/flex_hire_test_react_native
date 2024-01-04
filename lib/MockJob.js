import axios from 'axios';

const MockJob = {
  fakeData: async () => {
    const baseURL = 'https://73c8-186-233-160-19.ngrok-free.app';
    const jobsAccess = baseURL + '/api/v1/user';

    try {
      const response = await axios.get(jobsAccess);
      return response.data;
    } catch (error) {
      console.error('error:', error);
      return null;
    }
  },
};

export default MockJob;
