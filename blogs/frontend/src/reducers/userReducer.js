import { createSlice } from '@reduxjs/toolkit';
import userService from 'services/user';
import blogService from 'services/blog';
import { setNotification } from './notificationReducer';

const slice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, { payload }) {
      return payload;
    },
    removeUser(state, { payload }) {
      return null;
    },
  },
});

export const loadUser = () => async (dispatch) => {
  let loggedUser = window.localStorage.getItem('loggedUser');
  if (loggedUser) {
    loggedUser = JSON.parse(loggedUser);
    blogService.setToken(loggedUser.token);
    dispatch(setUser(loggedUser));
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const loggedUser = await userService.login({ username, password });
    window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    blogService.setToken(loggedUser.token);
    dispatch(setUser(loggedUser));
    dispatch(setNotification(`${username} logged correctly`, false, 5));
  } catch (err) {
    dispatch(removeUser());
    dispatch(setNotification(err.response.data.error, true, 5));
  }
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem('loggedUser');
  dispatch(removeUser());
};

export const {
  setUser,
  removeUser,
} = slice.actions;
export default slice.reducer;
