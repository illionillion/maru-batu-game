import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { UIProvider } from '@yamada-ui/react';
import { customConfig } from './theme/config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider config={customConfig}>
      <App />
    </UIProvider>
  </React.StrictMode>,
);
