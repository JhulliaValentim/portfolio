# Backend do Portfólio — Vercel Functions

Este backend usa funções independentes da Vercel. Não usa Express, `server.js`, `dotenv` ou `vercel.json`.

## Estrutura

- `api/health.js` → `GET /api/health`
- `api/certificados.js` → `GET /api/certificados`
- `api/certificados/[id].js` → `GET /api/certificados/:id`
- `lib/supabase.js` → cliente Supabase
- `lib/cors.js` → CORS e validações HTTP

## Vercel

Crie um projeto separado para o backend usando o mesmo repositório e configure:

- Root Directory: `backend`
- Framework Preset: `Other` ou `Node` (sem Build Command e sem Output Directory)

Environment Variables do projeto backend:

- `SUPABASE_URL=https://SEU-PROJETO.supabase.co`
- `SUPABASE_SECRET_KEY=sb_secret_...`

Depois do deploy, teste:

- `https://SEU-BACKEND.vercel.app/api/health`
- `https://SEU-BACKEND.vercel.app/api/certificados`

No projeto frontend, configure:

- `VITE_API_URL=https://SEU-BACKEND.vercel.app/api`

Depois faça Redeploy do frontend.
