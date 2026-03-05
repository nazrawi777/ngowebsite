#!/bin/bash

# Django Website Quick Start Script

echo "==================================="
echo "Django Website Setup"
echo "==================================="

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/Scripts/activate 2>/dev/null || source venv/bin/activate

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Run migrations
echo "Running migrations..."
python manage.py migrate

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

echo ""
echo "==================================="
echo "Setup complete!"
echo "==================================="
echo ""
echo "To start the development server, run:"
echo "  source venv/Scripts/activate  # or: source venv/bin/activate"
echo "  python manage.py runserver"
echo ""
echo "Then visit: http://127.0.0.1:8000/"
echo ""
