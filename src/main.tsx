import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ColorModeScript, UIProvider } from '@yamada-ui/react';
import { customConfig } from './theme/config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={customConfig.initialColorMode} />
    <UIProvider config={customConfig}>
      <App />
    </UIProvider>
  </React.StrictMode>,
);
