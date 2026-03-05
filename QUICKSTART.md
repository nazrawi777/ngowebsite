# Quick Start Guide

## For Windows Users

1. **Run the setup script:**
   ```bash
   ./start_django.bat
   ```
   OR manually:
   ```bash
   # Activate virtual environment
   venv\Scripts\activate.bat
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Run migrations
   python manage.py migrate
   
   # Start server
   python manage.py runserver
   ```

2. **Visit:** http://127.0.0.1:8000/

## For Linux/Mac Users

1. **Run the setup script:**
   ```bash
   bash start_django.sh
   ```
   OR manually:
   ```bash
   # Activate virtual environment
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Run migrations
   python manage.py migrate
   
   # Start server
   python manage.py runserver
   ```

2. **Visit:** http://127.0.0.1:8000/

## Available Pages

All your original HTML pages are now accessible through Django:

- Home: http://127.0.0.1:8000/
- About: http://127.0.0.1:8000/about/
- Services: http://127.0.0.1:8000/services/
- Products: http://127.0.0.1:8000/products/
- Store: http://127.0.0.1:8000/store/
- Blog: http://127.0.0.1:8000/blog/
- Contact: http://127.0.0.1:8000/contact/
- Team: http://127.0.0.1:8000/team/
- Programmes: http://127.0.0.1:8000/programmes/
- Video Gallery: http://127.0.0.1:8000/video-gallery/
- Image Gallery: http://127.0.0.1:8000/image-gallery/
- Donation: http://127.0.0.1:8000/donation/
- Our History: http://127.0.0.1:8000/ourhistory/

## Troubleshooting

**Django not installed?**
```bash
pip install Django>=4.2
```

**Static files not loading?**
```bash
python manage.py collectstatic
```

**Port already in use?**
```bash
python manage.py runserver 8080
```
