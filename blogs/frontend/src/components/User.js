import React from 'react';
import { useSelector } from 'react-redux';

function User({ user }) {
  const blogs = useSelector((state) => (
    (user)
      ? state.blogs.filter((b) => b.user.username === user.username)
      : []
  ));

  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <div>added blogs</div>
      <ul>
        {
          [].concat(blogs.map((b) => <li key={`user-blog-${b.id}`}>{b.title}</li>))
        }
      </ul>
    </div>
  );
}

export default User;
