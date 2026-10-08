# Week 2 Internship Projects — Rolla Dheeraj Koushik

This repository contains my Week 2 internship practice tasks and assignments covering React fundamentals and backend development with Node.js, Express.js, MongoDB, REST APIs, JWT, and bcrypt.

## Projects

| # | Project | Technologies | Key concepts |
|---|---|---|---|
| 1 | Product Component | React, Vite | Reusable component and product information |
| 2 | Props & State Practice | React, Vite | Props, state, event handling |
| 3 | React To-Do App | React, Vite | Add/delete tasks, state management |
| 4 | React Router Navigation | React, React Router, Vite | Multi-page client-side navigation |
| 5 | CSS Modules Practice | React, CSS Modules, Vite | Scoped component styling |
| 6 | To-Do List REST API | Node.js, Express, MongoDB, Mongoose | CRUD API, REST endpoints |
| 7 | User Authentication API | Node.js, Express, MongoDB, bcrypt, JWT | Registration, login, password hashing, tokens |
| 8 | Notes App Backend | Node.js, Express, MongoDB, JWT | Protected CRUD routes for notes |

## Folder Structure

```text
week-2-internship-projects/
├── 01-product-component/
├── 02-props-state-practice/
├── 03-react-todo-app/
├── 04-react-router-navigation/
├── 05-css-modules-practice/
├── 06-todo-rest-api/
├── 07-user-auth-api/
├── 08-notes-app-backend/
├── .gitignore
└── README.md
```

## Run the React Projects

For any project from `01` to `05`:

```bash
cd 01-product-component
npm install
npm run dev
```

Open the localhost URL shown by Vite. Use the same steps inside the other React project folders.

## Run the Backend Projects

For projects `06`, `07`, and `08`:

1. Install Node.js and MongoDB, or use a MongoDB Atlas connection string.
2. Copy `.env.example` to `.env`.
3. Update `MONGODB_URI` and, where required, `JWT_SECRET`.
4. Run:

```bash
npm install
npm run dev
```

The included Postman collections can be imported into Postman to test the APIs.

## Author

**Rolla Dheeraj Koushik**  
B.Tech Computer Science & Engineering (AI & ML), SRM University-AP

- GitHub: https://github.com/DheerajKoushik1905
- LinkedIn: https://www.linkedin.com/in/dheeraj-koushik-rolla-3217a4422/
