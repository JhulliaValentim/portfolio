# Backend do Portfólio — Vercel Functions

Este backend usa funções independentes da Vercel. Não inicia servidor Express.

## Rotas

- `GET /api/health`
- `GET /api/certificados`
- `GET /api/certificados/:id`

## Variáveis de ambiente na Vercel

Configure no projeto do backend:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`

A chave também pode ser fornecida como `SUPABASE_SERVICE_ROLE_KEY` para compatibilidade.
Nunca envie a chave secreta para o GitHub.

## Deploy

No segundo projeto da Vercel, selecione o mesmo repositório do portfólio e configure:

- Root Directory: `backend`
- Framework Preset: `Other`

Não configure Output Directory.

Após o deploy, teste primeiro:

`https://SEU-BACKEND.vercel.app/api/health`

Depois:

`https://SEU-BACKEND.vercel.app/api/certificados`

No projeto frontend da Vercel, crie:

`VITE_API_URL=https://SEU-BACKEND.vercel.app/api`

Depois faça um redeploy do frontend.
