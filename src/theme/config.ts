import type { ThemeConfig } from '@yamada-ui/react';
import { extendConfig } from '@yamada-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
};

export const customConfig = extendConfig(config);
