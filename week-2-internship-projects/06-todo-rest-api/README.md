# To-Do List REST API

A Node.js/Express REST API with MongoDB storage for managing tasks.

## Endpoints
- `GET /api/tasks` — list tasks
- `POST /api/tasks` — add a task
- `PUT /api/tasks/:id` — update a task
- `DELETE /api/tasks/:id` — delete a task

## Setup
```bash
npm install
copy .env.example .env
npm run dev
```

Make sure MongoDB is running or replace `MONGODB_URI` with your MongoDB Atlas URI. Import `postman_collection.json` into Postman for testing.
