/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import useField from 'hooks';
import { createBlog } from 'reducers/blogReducer';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  ButtonGroup,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

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
            <TextField
              label="Title"
              {...title}
            />

            <TextField
              label="Author"
              {...author}
            />

            <TextField
              label="Url"
              {...url}
            />

            <ButtonGroup>
              <Button
                startIcon={<EditIcon />}
                onClick={handleCreateBlog}
              >
                Create
              </Button>
              <Button
                startIcon={<CancelIcon />}
                onClick={() => setVisible(false)}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        </div>
      )
      : (
        <Button
          startIcon={<EditIcon />}
          onClick={() => setVisible(true)}
        >
          New Blog
        </Button>
      )
  );
}
