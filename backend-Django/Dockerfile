FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Create media directories
RUN mkdir -p photos projets static

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port
EXPOSE 8001

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "config.wsgi:application"]
