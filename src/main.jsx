import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateGlobal from './styles/global';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CreateGlobal />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
