import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ThemeProvider } from 'styled-components';

import theme from './theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);