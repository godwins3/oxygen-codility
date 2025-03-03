# 🚀 Oxygene Task Management System

Oxygene is a **full-stack task management system** built using:
- **Backend:** FastAPI, PostgreSQL, Alembic, JWT Authentication, Gunicorn
- **Frontend:** Next.js, Tailwind CSS, Redux Toolkit
- **Infrastructure:** Docker, Nginx, GitHub Actions CI/CD

---

## 📂 Project Structure

```bash
/backend
/frontend
/infra (Docker & CI/CD)
README.md
```

### `/backend`

```bash
backend/
│── app/
│   │── api/                # API routes
│   │   ├── auth.py         # Auth endpoints (register/login)
│   │   ├── tasks.py        # Task CRUD operations
│   │── core/               # Core app settings
│   │   ├── config.py       # App configuration (env variables)
│   │   ├── database.py     # DB connection
│   │── models/             # Database models
│   │   ├── user.py         # User model
│   │   ├── task.py         # Task model
│   │── schemas/            # Pydantic schemas
│   │   ├── user.py         # User schema
│   │   ├── task.py         # Task schema
│   │── services/           # Business logic/services
│   │   ├── auth.py         # Authentication logic
│   │   ├── tasks.py        # Task logic
│   │── main.py             # Entry point for FastAPI app
│── migrations/             # Alembic migrations
│── tests/                  # Pytest unit tests
│   ├── test_auth.py        # Auth tests
│   ├── test_tasks.py       # Task tests
│── .env                    # Environment variables
│── Dockerfile              # Dockerfile for backend
│── requirements.txt        # Python dependencies
│── alembic.ini             # Alembic config
│── gunicorn.conf.py        # Gunicorn config (if needed)
│── README.md               # Documentation
```

### `/frontend`

```bash
frontend/
│── src/
│   │── app/
│   │   ├── layout.tsx      # Main layout
│   │   ├── page.tsx        # Homepage (if needed)
│   │   ├── login/          # Login page
│   │   ├── dashboard/      # Task Dashboard
│   │   ├── tasks/          # Task Management UI
│   │── components/         # Reusable UI components
│   │   ├── TaskList.tsx    # Task list UI
│   │   ├── TaskForm.tsx    # Task form UI
│   │── hooks/              # Custom React hooks
│   │── lib/                # API calls, utilities
│   │   ├── api.ts          # API functions
│   │── store/              # Redux store
│   │   ├── tasksSlice.ts   # Task state management
│   │   ├── authSlice.ts    # Auth state management
│   │── styles/             # Tailwind styles
│   │── utils/              # Helper functions
│── public/                 # Static assets
│── .env                    # Environment variables
│── Dockerfile              # Dockerfile for frontend
│── package.json            # Dependencies
│── README.md               # Documentation
```

### `/infra`

```bash
infra/
│── database/               # Database setup
│   │── init.sql            # Initial DB setup script (if needed)
│   │── Dockerfile          # Dockerfile for PostgreSQL setup
│── docker-compose.yml      # Docker setup for backend, frontend, and DB
│── nginx.conf              # Reverse proxy config (if needed)
│── .github/
│   ├── workflows/
│   │   ├── ci-cd.yml       # GitHub Actions pipeline

```

## �� Quick Start

### Backend Setup

- install dependencies:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

- create a `.env` file in the `backend` directory with the following content:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/oxygene
SECRET_KEY=your-secret-key
```

- set up the database:

```bash
psql -U postgres -c "CREATE DATABASE oxygene;"
psql -U postgres -c "CREATE DATABASE oxygene_test;"
```

- run migrations:

```bash
alembic upgrade head
```

- run the FastAPI app:

```bash
gunicorn -c gunicorn.conf.py app.main:app
```

### Frontend Setup

- install dependencies:

```bash
cd frontend
npm install
```

- create a `.env` file in the `frontend` directory with the following content:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

- run the Next.js app:

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view the app.