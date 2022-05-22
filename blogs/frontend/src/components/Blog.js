/* eslint-disable react/jsx-props-no-spreading */

import useField from 'hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { voteBlog } from 'reducers/blogReducer';
import blogService from 'services/blog';

function Blog({ blog }) {
  const [comments, setComments] = useState([]);
  const { reset: resetComment, ...comment } = useField('comment', 'InputComment', 'text');
  const dispatch = useDispatch();

  useEffect(() => {
    if (blog) blogService.getComments(blog).then((data) => setComments(data));
  }, [blog]);

  if (!blog) return null;

  const handleNewComment = async () => {
    const newComment = await blogService.createComment({ content: comment.value, blog: blog.id });
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
      <div>
        <span>{`likes ${blog.likes}`}</span>
        <button
          id="like_button"
          type="button"
          onClick={() => dispatch(voteBlog(blog))}
        >
          like
        </button>
        <div>{`added by ${blog.user.username}`}</div>
      </div>
      <h3>comments</h3>
      <form>
        <div>
          comment
          <input {...comment} />
          <button type="button" onClick={handleNewComment}>add comment</button>
        </div>
      </form>
      <ul>
        {
          [].concat(comments)
            .map((c) => <li key={`comment-${c.id}`}>{c.content}</li>)
        }
      </ul>
    </div>
  );
}

export default Blog;
