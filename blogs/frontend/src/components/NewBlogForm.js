/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import useField from 'hooks';
import { createBlog } from 'reducers/blogReducer';
import { useDispatch } from 'react-redux';

export default function NewBlogForm() {
  const [visible, setVisible] = useState(false);
  const { reset: resetTitle, ...title } = useField('title', 'InputTitle', 'text');
  const { reset: resetAuthor, ...author } = useField('author', 'InputAuthor', 'text');
  const { reset: resetUrl, ...url } = useField('url', 'InputUrl', 'text');
  const dispatch = useDispatch();

  const handleCreateBlog = async () => {
    dispatch(createBlog({
      title: title.value,
      author: author.value,
      url: url.value,
    }));

    // that's bad, we don't have error catch
    resetTitle();
    resetAuthor();
    resetUrl();
    setVisible(false);
  };

  return (
    (visible)
      ? (
        <div className="NewBlogForm">
          <h2>create new</h2>
          <form>
            <div>
              title:
              <input {...title} />
            </div>

            <div>
              author:
              <input {...author} />
            </div>

            <div>
              url:
              <input {...url} />
            </div>

            <button
              type="button"
              id="create_button"
              onClick={handleCreateBlog}
            >
              create
            </button>
            <div>
              <button
                type="button"
                id="create_button"
                onClick={() => setVisible(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      )
      : (
        <div>
          <button
            type="button"
            id="create_button"
            onClick={() => setVisible(true)}
          >
            new blog
          </button>
        </div>
      )
  );
}
