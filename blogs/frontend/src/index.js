import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from 'store';
import App from 'App';

// for statistics of tests
// npm test -- --coverage

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        color: 'primary',
        variant: 'filled',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        color: 'primary',
        variant: 'contained',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'small',
        color: 'primary',
        variant: 'contained',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
);
