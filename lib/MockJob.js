import axios from 'axios';

const MockJob = {
  fakeData: async () => {
    const baseURL = 'https://73c8-186-233-160-19.ngrok-free.app';
    const jobsAccess = baseURL + '/api/v1/jobs';

    try {
      const response = await axios.get(jobsAccess);
      return response.data.data.data;
    } catch (error) {
      console.error('error:', error);
      console.error('Error consuming ngrok api data:', userData);
      return null;
    }
  },
};

export default MockJob;
