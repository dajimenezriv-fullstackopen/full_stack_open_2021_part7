import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => { token = `bearer ${newToken}`; };

const getAll = async () => (await axios.get(baseUrl)).data;

const getComments = async (blog) => {
  const res = await axios.get(`${baseUrl}/${blog.id}/comments`);
  return res.data;
};

const create = async (newBlog) => (
  (await axios.post(baseUrl, newBlog, {
    headers: { Authorization: token },
  })).data
);

const createComment = async (newComment) => {
  const res = await axios.post(`${baseUrl}/${newComment.blog}/comments`, newComment);
  return res.data;
};

const update = async (blog) => (
  JSON.parse((await axios.put(`${baseUrl}/${blog.id}/`, blog, {
    headers: { Authorization: token },
  })).config.data)
);

const remove = async (id) => (
  axios.delete(`${baseUrl}/${id}/`, {
    headers: { Authorization: token },
  })
);

const exportObjects = {
  setToken,
  getAll,
  getComments,
  create,
  createComment,
  update,
  remove,
};

export default exportObjects;
