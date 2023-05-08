import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig({
  plugins: [react()],
  // Load environment variables from .env file
  define: {
    'process.env': process.env
  }
});

dotenv.config();