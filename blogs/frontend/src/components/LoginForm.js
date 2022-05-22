/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useDispatch } from 'react-redux';
import useField from 'hooks';
import { login } from 'reducers/userReducer';

export default function LoginForm() {
  const { reset: resetUsername, ...username } = useField('username', 'InputUsername', 'text');
  const { reset: resetPassword, ...password } = useField('password', 'InputPassword', 'password');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(login(username.value, password.value));
  };

  return (
    <form>
      <div>
        username
        <input {...username} />
      </div>
      <div>
        password
        <input {...password} />
      </div>
      <button type="button" id="login_button" onClick={handleLogin}>login</button>
    </form>
  );
}
