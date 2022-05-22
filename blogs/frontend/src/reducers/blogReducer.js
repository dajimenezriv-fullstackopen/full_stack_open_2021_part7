import { createSlice } from '@reduxjs/toolkit';
import blogService from 'services/blog';
import { setNotification } from './notificationReducer';

const slice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setAll(state, { payload }) {
      return payload;
    },
    append(state, { payload }) {
      state.push(payload);
    },
    update(state, { payload }) {
      const blog = payload;
      return state.map((a) => (
        blog.id !== a.id
          ? a
          : blog
      ));
    },
    remove(state, { payload }) {
      const id = payload;
      return state.filter((a) => a.id !== id);
    },
  },
});

export const initializeBlogs = () => async (dispatch) => {
  const blogs = await blogService.getAll();
  dispatch(setAll(blogs));
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const newBlog = await blogService.create(blog);
    dispatch(append(newBlog));
    dispatch(setNotification(`a new blog ${blog.title} by ${blog.author} added`, false, 5));
  } catch (err) {
    dispatch(setNotification(err.response.data.error, true, 5));
  }
};

export const removeBlog = (id) => async (dispatch) => {
  await blogService.remove(id);
  dispatch(remove(id));
};

export const voteBlog = (blog) => async (dispatch) => {
  const updatedBlog = await blogService.update({
    ...blog,
    likes: blog.likes + 1,
  });
  dispatch(update(updatedBlog));
};

export const {
  setAll,
  append,
  update,
  remove,
} = slice.actions;
export default slice.reducer;
