# Use official PostgreSQL image
FROM docker.io/library/postgres:15

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=oxygene
ENV POSTGRES_USER=oxygene_user
ENV POSTGRES_PASSWORD=strongpassword

# Copy the initialization script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port
EXPOSE 5432 
