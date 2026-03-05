# Django Website Setup

This project has been converted from static HTML to Django while preserving all visual content and functionality.

## Project Structure

```
ngowebsite/
├── config/              # Django project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── src/                 # Main Django app
│   ├── views.py        # View functions for all pages
│   ├── urls.py         # URL routing
│   └── models.py       # Database models (empty for now)
├── templates/          # HTML templates (moved from root)
├── static/             # Static files directory
├── css/                # CSS files (served as static)
├── js/                 # JavaScript files (served as static)
├── images/             # Image files (served as static)
├── assets/             # Asset files (served as static)
├── webfonts/           # Web fonts (served as static)
├── content/            # JSON content files
├── manage.py           # Django management script
└── requirements.txt    # Python dependencies
```

## Installation & Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run Migrations

```bash
python manage.py migrate
```

### 3. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 4. Collect Static Files (For Production)

```bash
python manage.py collectstatic
```

### 5. Run Development Server

```bash
python manage.py runserver
```

Visit: http://127.0.0.1:8000/

## Available URLs

- `/` - Home page (index.html)
- `/about/` - About page
- `/services/` - Services page
- `/products/` - Products page
- `/store/` - Store page
- `/blog/` - Blog page
- `/contact/` - Contact page
- `/team/` - Team page
- `/programmes/` - Programmes page
- `/video-gallery/` - Video gallery
- `/image-gallery/` - Image gallery
- `/donation/` - Donation page
- `/ourhistory/` - Our history page
- `/admin/` - Django admin panel

## Static Files Configuration

All static files (CSS, JS, images, assets) are configured to be served from their original directories:
- CSS files: `/css/`
- JavaScript: `/js/`
- Images: `/images/`
- Assets: `/assets/`
- Web fonts: `/webfonts/`

The templates reference these paths exactly as they did in the static HTML version, so no visual changes occur.

## What Changed?

1. **HTML files** moved to `templates/` directory
2. **Django app** (`src`) configured with views and URLs
3. **Static files** configured to serve from original directories
4. **URL routing** set up to match original HTML file names
5. **WhiteNoise** added for efficient static file serving

## What Stayed the Same?

- All HTML content and structure
- All CSS styling
- All JavaScript functionality
- All images and assets
- All visual appearance and user experience

## Next Steps

You can now:
- Add database models in `src/models.py`
- Create dynamic content with Django templates
- Add forms and user authentication
- Build an admin interface
- Deploy to production servers

## Production Deployment

For production, remember to:
1. Set `DEBUG = False` in settings.py
2. Configure `ALLOWED_HOSTS`
3. Set a secure `SECRET_KEY`
4. Run `python manage.py collectstatic`
5. Use a production server (gunicorn, uwsgi)
6. Configure a reverse proxy (nginx, apache)
