# Portfólio

Projeto completo com frontend React/Vite e backend em Vercel Functions conectado ao Supabase.

## Frontend

Na raiz:

```bash
npm install
npm run dev
```

Para produção, configure no projeto frontend da Vercel:

```text
VITE_API_URL=https://SEU-BACKEND.vercel.app/api
```

## Backend

O backend está em `backend/` e foi preparado para ser um segundo projeto na Vercel.

Configuração do projeto backend:

```text
Root Directory: backend
Node: 22.x (definido em backend/package.json)
```

Environment Variables:

```text
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
```

Nunca envie a chave secreta para o GitHub.

Rotas:

```text
GET /api/health
GET /api/certificados
GET /api/certificados/:id
```
