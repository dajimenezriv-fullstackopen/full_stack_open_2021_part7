import React from 'react';
import { Link } from 'react-router-dom';
import BlogElement from 'components/BlogElement';
import LoginForm from 'components/LoginForm';
import NewBlogForm from 'components/NewBlogForm';
import { logout } from 'reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

function Blogs() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  return (
    (user)
      ? (
        <div>
          <h2>
            <Link to="/">Blogs</Link>
          </h2>

          <form>
            <p>
              {`${user.username} logged in`}
              <button type="button" onClick={() => dispatch(logout())}>logout</button>
            </p>
          </form>

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
