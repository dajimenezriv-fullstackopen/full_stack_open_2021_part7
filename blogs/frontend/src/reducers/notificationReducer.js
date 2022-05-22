import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: null, error: false };
let timeoutId = null;

const slice = createSlice({
  name: 'notfication',
  initialState,
  reducers: {
    writeNotification(state, { payload }) {
      return payload;
    },
    clearNotification(state, { payload }) {
      timeoutId = null;
      return { message: null, error: false };
    },
  },
});

export const setNotification = (message, error, seconds) => (dispatch) => {
  if (timeoutId) clearTimeout(timeoutId);
  dispatch(writeNotification({ message, error }));
  timeoutId = setTimeout(() => dispatch(clearNotification()), seconds * 1000);
};

export const {
  writeNotification,
  clearNotification,
} = slice.actions;
export default slice.reducer;
