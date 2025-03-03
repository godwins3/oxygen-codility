# Oxygene Backend

- Backend implementation for the task management system using Python and FastAPI.

## Setup

1. Install FastAPI and required dependencies:

```bash
pip install -r requirements.txt
```

2. Run the FastAPI server:

```bash
gunicorn -c gunicorn.conf.py app.main:app
```
or

```bash
uvicorn app.main:app --reload
```

## Dockerize

- Build the Docker image:

```bash
cd backend
docker build -t oxygene-backend .
docker run -p 8000:8000 oxygene-backend
```
