import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  UIProvider,
  getColorModeScript,
  getThemeSchemeScript,
} from '@yamada-ui/react';
import { customConfig } from './theme/config.ts';

const injectScript = (textContent: string) => {
  const script = document.createElement('script');

  script.textContent = textContent;

  document.head.appendChild(script);
};

injectScript(
  getColorModeScript({
    initialColorMode: customConfig.initialColorMode,
  }),
);

injectScript(
  getThemeSchemeScript({
    initialThemeScheme: customConfig.initialThemeScheme,
  }),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider
      config={customConfig}
      colorModeStorageKey='ui-marubatu-color'
      themeSchemeStorageKey='ui-marubatu-theme'
    >
      <App />
    </UIProvider>
  </React.StrictMode>,
);
