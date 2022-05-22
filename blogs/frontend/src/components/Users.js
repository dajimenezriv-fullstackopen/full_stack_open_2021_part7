import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Users({ users }) {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div>
      <h2>Users</h2>

      <table>
        <thead>
          <tr>
            <th aria-label="empty" />
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {
            [].concat(users)
              .map((u) => (
                <tr key={u.id}>
                  <td>
                    <Link to={`/users/${u.id}`}>{u.username}</Link>
                  </td>
                  <td>
                    {
                      blogs.filter((blog) => blog.user.username === u.username).length
                    }
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Users;
