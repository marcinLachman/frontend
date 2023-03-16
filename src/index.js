import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';

import { Provider } from 'react-redux';
import { store } from 'store/store';

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    textFieldText: {
      main: '#fff',
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "none",
      color: "#fff",
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
