# Use the official Python image
FROM python:3.12

# Set the working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application
COPY . .

# Expose the API port
EXPOSE 8000

# Start FastAPI with Gunicorn
CMD ["gunicorn", "-c", "gunicorn.conf.py", "app.main:app"]
