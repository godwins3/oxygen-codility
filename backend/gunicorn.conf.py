import multiprocessing

# Bind Gunicorn to listen on port 8000
bind = "0.0.0.0:8000"

# Number of worker processes (CPU cores * 2 + 1)
workers = multiprocessing.cpu_count() * 2 + 1

# Use Uvicorn worker class for FastAPI
worker_class = "uvicorn.workers.UvicornWorker"

# Set logging level
loglevel = "info"

# Enable access logging
accesslog = "-"

# Error log location
errorlog = "-"

# Timeout for worker processes
timeout = 120
