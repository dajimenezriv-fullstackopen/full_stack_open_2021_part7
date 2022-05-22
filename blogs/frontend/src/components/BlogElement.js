import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlog, voteBlog } from 'reducers/blogReducer';
import { Link } from 'react-router-dom';
import './BlogElement.css';

function BlogElement({ blog }) {
  const [visible, setVisible] = useState(false);
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    (visible)
      ? (
        <div className="Blog">
          <div>
            {blog.title}
            {' '}
            {blog.author}
            {' '}
            <button
              id="hide_button"
              type="button"
              onClick={() => setVisible(false)}
            >
              hide
            </button>
          </div>
          <div>{blog.url}</div>
          <div>
            <span>{`likes ${blog.likes}`}</span>
            <button
              id="like_button"
              type="button"
              onClick={() => dispatch(voteBlog(blog))}
            >
              like
            </button>
          </div>
          <div>{blog.user.username}</div>
          {
            (loggedUser && blog.user.username === loggedUser.username)
              ? <button type="button" onClick={() => dispatch(removeBlog(blog.id))}>remove</button>
              : null
          }
        </div>
      )
      : (
        <div className="Blog">
          <span>
            <Link to={`/blogs/${blog.id}`}>
              {`${blog.title} ${blog.author}`}
            </Link>
          </span>
          <button
            id="view_button"
            type="button"
            onClick={() => setVisible(true)}
          >
            view
          </button>
        </div>
      )
  );
}

export default BlogElement;
