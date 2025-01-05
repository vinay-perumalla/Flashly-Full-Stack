import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@stripe/stripe-js': '/node_modules/@stripe/stripe-js/dist/index.mjs',
//     },
//   },
// });
