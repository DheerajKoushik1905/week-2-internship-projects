# User Authentication API

A backend authentication API with registration, login, password hashing using bcrypt, and JWT-based authentication.

## Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile` — requires `Authorization: Bearer <token>`

## Setup
```bash
npm install
copy .env.example .env
npm run dev
```

Set a strong `JWT_SECRET` in `.env`. Import `postman_collection.json` into Postman to test the API.
