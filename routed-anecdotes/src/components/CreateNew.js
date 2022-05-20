/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useField from 'hooks';

function CreateNew({ addNew }) {
  const { reset: resetContent, ...content } = useField('text');
  const { reset: resetAuthor, ...author } = useField('text');
  const { reset: resetInfo, ...info } = useField('text');
  const navigate = useNavigate();

  const reset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    navigate('/');
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={reset}>reset</button>
      </form>
    </div>
  );
}

export default CreateNew;
