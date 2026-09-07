import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const localDevApiPlugin = () => ({
  name: 'local-dev-api-plugin',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url = req.url ? req.url.split('?')[0] : '';
      if ((url === '/api/leads' || url === '/api/quiz' || url === '/api/lead') && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => { body += chunk; });
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body || '{}');
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
              success: true,
              persisted: true,
              leadId: parsed.requestId || `local-dev-${Date.now()}`,
              messaging: { user: 'NOT_CONFIGURED', internal: 'NOT_CONFIGURED' },
              auditRecorded: true
            }));
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'INVALID_JSON' }));
          }
        });
        return;
      }
      next();
    });
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      tailwindcss(),
      localDevApiPlugin()
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
