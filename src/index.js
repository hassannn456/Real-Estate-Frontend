import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "swiper/css/bundle";
import "./components/CssFiles/Home.css";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './components/UI/Theme';
import store from './components/Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>
  </Provider>
);

