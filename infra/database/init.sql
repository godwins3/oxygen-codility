-- Create the Oxygene database
CREATE DATABASE oxygene;

-- Create a test database
CREATE DATABASE oxygene_test;

-- Create a new PostgreSQL user
CREATE USER oxygene_user WITH ENCRYPTED PASSWORD 'strongpassword';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE oxygene TO oxygene_user;
GRANT ALL PRIVILEGES ON DATABASE oxygene_test TO oxygene_user;
