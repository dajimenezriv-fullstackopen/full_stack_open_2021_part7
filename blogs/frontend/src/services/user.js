import axios from 'axios';

// we can do that because in package.json we have added a proxy port
const userUrl = '/api/users';
const loginUrl = '/api/login';

const getAll = async () => (await axios.get(userUrl)).data;

const login = async (credentials) => (await axios.post(loginUrl, credentials)).data;

const exportObjects = {
  getAll,
  login,
};

export default exportObjects;
