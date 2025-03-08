#!/bin/sh
echo "Waiting for PostgreSQL..."
while ! nc -z postgres 5432; do
  sleep 1
done
echo "PostgreSQL is up - starting backend"
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
