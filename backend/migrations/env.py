import os
from logging.config import fileConfig
from sqlalchemy import create_engine
from sqlalchemy import pool
from alembic import context

# Import the database Base model from your app
from app.core.database import Base  
from app.models.user import User  
from app.models.task import Task  

# Load Alembic config and logging
config = context.config
if config.config_file_name:
    fileConfig(config.config_file_name)

# Read database URL from environment or alembic.ini
DATABASE_URL = os.getenv("DATABASE_URL", config.get_main_option("sqlalchemy.url"))
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in environment variables or alembic.ini")

config.set_main_option("sqlalchemy.url", DATABASE_URL)

# Define target metadata for autogenerate
target_metadata = Base.metadata

# Run migrations
def run_migrations_online():
    engine = create_engine(DATABASE_URL, poolclass=pool.NullPool)
    with engine.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()

run_migrations_online()
