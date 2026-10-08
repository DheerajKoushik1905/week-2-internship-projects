# Notes App Backend

A notes-taking backend API with CRUD operations and JWT-protected routes.

## Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

## Protected Note Routes
All note routes require `Authorization: Bearer <token>`.

- `GET /api/notes`
- `GET /api/notes/:id`
- `POST /api/notes`
- `PUT /api/notes/:id`
- `DELETE /api/notes/:id`

## Setup
```bash
npm install
copy .env.example .env
npm run dev
```

Set `JWT_SECRET` and `MONGODB_URI` in `.env`. Import `postman_collection.json` into Postman for testing.
