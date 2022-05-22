import React from 'react';
import { Link } from 'react-router-dom';
import BlogElement from 'components/BlogElement';
import LoginForm from 'components/LoginForm';
import NewBlogForm from 'components/NewBlogForm';
import { logout } from 'reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

function Blogs() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  return (
    (user)
      ? (
        <div>
          <Typography variant="h2">
            <Link to="/">Blogs</Link>
          </Typography>

          <div>
            {`${user.username} logged in`}
            <button type="button" onClick={() => dispatch(logout())}>logout</button>
          </div>

          <NewBlogForm />

          {
            [].concat(blogs)
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => <BlogElement key={blog.id} blog={blog} />)
          }

        </div>
      )
      : <LoginForm />
  );
}

export default Blogs;
