# Portfólio — Jhullia Valentim

Portfólio em React + Vite com certificados carregados por uma API serverless na Vercel e dados armazenados no Supabase.

## Estrutura

- `/src`: frontend React/Vite
- `/backend/api`: Vercel Functions
- `/backend/lib`: utilitários do backend e cliente Supabase

## Frontend local

```bash
npm install
npm run dev
```

Crie `.env` na raiz a partir de `.env.example` se quiser apontar o frontend para uma API específica.

## Deploy do frontend

No projeto Vercel do frontend:

- Root Directory: `./`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Depois que o backend estiver no ar, configure:

`VITE_API_URL=https://SEU-BACKEND.vercel.app/api`

## Deploy do backend

Crie um segundo projeto Vercel usando o mesmo repositório:

- Root Directory: `backend`
- Framework Preset: `Other`

Environment Variables:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`

Teste `/api/health` antes de `/api/certificados`.
