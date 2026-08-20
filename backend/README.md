# Backend do Portfólio - Jhullia Valentim

API em Node.js + Express conectada ao Supabase.

## Rotas

- `GET /`
- `GET /api/health`
- `GET /api/certificados`
- `GET /api/certificados/:id`

## Instalação

```bash
npm install
```

Copie `.env.example` para `.env` e preencha:

```env
PORT=8080
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=SUA_SERVICE_ROLE_KEY
FRONTEND_URL=http://localhost:5173
```

## Rodar

```bash
npm run dev
```

Teste:

```text
http://localhost:8080/api/health
http://localhost:8080/api/certificados
```

## Segurança

A `SUPABASE_SERVICE_ROLE_KEY` é secreta e deve existir somente no backend.
Nunca coloque essa chave no React nem envie o `.env` para o GitHub.

## Vercel

O projeto já contém `api/index.js` e `vercel.json`.
Cadastre na Vercel as variáveis `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` e `FRONTEND_URL`.
