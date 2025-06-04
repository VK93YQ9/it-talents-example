// @ts-check
import {defineConfig, envField} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  env: {
    schema: {
      IT_TALENTS_AI_FOUNDRY_API_KEY: envField.string({ context: "server", access: "secret" }),
      IT_TALENTS_AI_FOUNDRY_API_URL: envField.string({ context: "server", access: "secret" })
    }
  }
});