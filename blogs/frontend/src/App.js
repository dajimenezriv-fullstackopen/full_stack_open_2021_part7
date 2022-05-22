import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs } from 'reducers/blogReducer';
import { loadUser } from 'reducers/userReducer';
import { Routes, Route, useMatch } from 'react-router-dom';
import Notification from 'components/Notification';
import Blogs from 'components/Blogs';
import Users from 'components/Users';
import User from 'components/User';
import Blog from 'components/Blog';
import userService from 'services/user';

function App() {
  const [users, setUsers] = useState([]);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(initializeBlogs());
    userService.getAll().then((data) => setUsers(data));
  }, [dispatch]);

  const userMatch = useMatch('/users/:id');
  const user = userMatch
    ? users.find((u) => u.id === userMatch.params.id)
    : null;

  const blogMatch = useMatch('/blogs/:id');
  const blog = blogMatch
    ? blogs.find((b) => b.id === blogMatch.params.id)
    : null;

  return (
    <div>
      <Notification />
      <Blogs />
      <Routes>
        <Route path="/blogs/:id" element={<Blog blog={blog} />} />
        <Route path="/users/:id" element={<User user={user} />} />
        <Route path="/" element={<Users users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
