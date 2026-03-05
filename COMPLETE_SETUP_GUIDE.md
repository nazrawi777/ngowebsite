# Complete Setup Guide - Hulegeb Dynamic Website

## Overview

This guide walks you through setting up the complete dynamic Django website with Hero Slides, Gallery (images & videos), and Blog system.

## What's Been Implemented

### ✓ Models
1. **HeroSlide** - Homepage slider content
2. **GalleryItem** - Image and video gallery with pagination
3. **BlogPost** - Full blog system with SEO

### ✓ Features
- Media file uploads (images & videos)
- External URL support (for all media)
- Pagination (Gallery: 12 items, Blog: 9 posts)
- Admin interface with rich management
- SEO optimization
- Seed data command for initial content

### ✓ Templates Updated
- `templates/index.html` - Dynamic hero slider
- `templates/image-gallery.html` - Dynamic gallery with video support
- `templates/blog.html` - Dynamic blog list with pagination

## Step-by-Step Setup

### 1. Run Migrations

Create database tables for all models:

```bash
python manage.py makemigrations
python manage.py migrate
```

Expected output:
```
Migrations for 'src':
  src/migrations/0001_initial.py
    - Create model BlogPost
    - Create model GalleryItem
    - Create model HeroSlide
```

### 2. Create Superuser

Create an admin account:

```bash
python manage.py createsuperuser
```

Follow the prompts to set username, email, and password.

### 3. Seed Initial Data

Populate the database with sample content:

```bash
python manage.py seed_data
```

This creates:
- 3 Hero Slides
- 9 Gallery Items
- 6 Blog Posts

### 4. Add CSS for Video Gallery

Add the video play button styles from `GALLERY_VIDEO_CSS.md` to your `static/css/custom.css` file.

### 5. Start Development Server

```bash
python manage.py runserver
```

Visit: `http://127.0.0.1:8000/`

### 6. Access Admin Panel

Go to: `http://127.0.0.1:8000/admin/`

Login with your superuser credentials.

## Admin Panel Guide

### Managing Hero Slides

**Location**: Admin → Src → Hero Slides

**Features**:
- Add/edit homepage slider content
- Upload images or use external URLs
- Set display order
- Activate/deactivate slides

**Fields**:
- Title, headings (3 parts), description
- Image upload OR image URL
- Alt text for accessibility
- Order (lower numbers appear first)
- Active status

### Managing Gallery Items

**Location**: Admin → Src → Gallery Items

**Features**:
- Add images or videos
- Support for uploaded files and external URLs
- YouTube video integration
- Custom thumbnails for videos
- Pagination (12 items per page)

**Fields**:
- Title, media type (Image/Video)
- Image: upload OR URL
- Video: upload OR URL + optional thumbnail
- Alt text
- Order and active status

**Video Tips**:
- For YouTube: Just paste the full URL
- For uploaded videos: Use MP4 or WebM format
- Add thumbnails for better presentation

### Managing Blog Posts

**Location**: Admin → Src → Blog Posts

**Features**:
- Full blog management
- Auto-generate URL slugs
- SEO optimization
- Featured posts
- Date-based filtering

**Fields**:
- Title (slug auto-generates)
- Excerpt and full content
- Featured image (upload or URL)
- Author name
- Publication date
- Published status
- Featured flag (for homepage)
- Meta description (SEO)

## File Structure

```
project/
├── src/
│   ├── management/
│   │   └── commands/
│   │       └── seed_data.py       # Seed data command
│   ├── migrations/                # Database migrations
│   ├── models.py                  # All models
│   ├── views.py                   # All views
│   ├── admin.py                   # Admin configuration
│   └── urls.py                    # URL routing
├── templates/
│   ├── index.html                 # Homepage (dynamic slider)
│   ├── blog.html                  # Blog list (dynamic)
│   ├── image-gallery.html         # Gallery (dynamic)
│   └── ...                        # Other templates
├── static/
│   ├── css/
│   │   └── custom.css            # Add video styles here
│   ├── js/
│   └── images/
├── media/                         # Uploaded files (auto-created)
│   ├── hero_slides/
│   ├── blog/
│   └── gallery/
│       ├── images/
│       ├── videos/
│       └── thumbnails/
├── config/
│   ├── settings.py               # Django settings
│   └── urls.py                   # Main URL config
├── MEDIA_SETUP.md                # Media files guide
├── BLOG_SETUP.md                 # Blog system guide
├── SEED_DATA.md                  # Seed data guide
├── GALLERY_VIDEO_CSS.md          # Video CSS styles
└── COMPLETE_SETUP_GUIDE.md       # This file
```

## URLs

### Public Pages
- Homepage: `/`
- Blog List: `/blog/`
- Blog Detail: `/blog/<slug>/`
- Gallery: `/image-gallery/`

### Admin
- Admin Panel: `/admin/`

## Testing Checklist

After setup, verify:

- [ ] Homepage displays 3 hero slides
- [ ] Hero slider transitions work
- [ ] Gallery shows 9 items with pagination
- [ ] Gallery images display correctly
- [ ] Blog page shows 6 posts with pagination
- [ ] Blog post links work
- [ ] Admin panel accessible
- [ ] Can add new hero slides
- [ ] Can add new gallery items (image & video)
- [ ] Can add new blog posts
- [ ] Media uploads work
- [ ] External URLs work

## Common Tasks

### Add a New Hero Slide

1. Go to Admin → Hero Slides → Add
2. Fill in title and headings
3. Add description
4. Upload image or provide URL
5. Set order number
6. Check "Is active"
7. Save

### Add a Gallery Image

1. Go to Admin → Gallery Items → Add
2. Enter title
3. Select "Image" as media type
4. Upload image or provide URL
5. Add alt text
6. Set order
7. Check "Is active"
8. Save

### Add a Gallery Video

1. Go to Admin → Gallery Items → Add
2. Enter title
3. Select "Video" as media type
4. For YouTube: Paste full YouTube URL
5. For uploaded: Upload MP4/WebM file
6. Optionally add thumbnail
7. Add alt text
8. Set order
9. Check "Is active"
10. Save

### Add a Blog Post

1. Go to Admin → Blog Posts → Add
2. Enter title (slug auto-generates)
3. Write excerpt (summary)
4. Write full content
5. Upload featured image or provide URL
6. Set publication date
7. Check "Is published"
8. Optionally check "Is featured"
9. Add meta description
10. Save

## Customization

### Change Pagination

**Gallery** (default: 12 items):
Edit `src/views.py`, line in `image_gallery()`:
```python
paginator = Paginator(gallery_items, 12)  # Change 12 to desired number
```

**Blog** (default: 9 posts):
Edit `src/views.py`, line in `blog()`:
```python
paginator = Paginator(blog_posts, 9)  # Change 9 to desired number
```

### Modify Seed Data

Edit `src/management/commands/seed_data.py` to:
- Add more items
- Change content
- Update images
- Modify dates

Then run: `python manage.py seed_data`

## Production Deployment

### Before Deploying

1. Set `DEBUG = False` in `settings.py`
2. Set `ALLOWED_HOSTS` properly
3. Configure static files collection
4. Set up media file serving (nginx/S3)
5. Use environment variables for secrets

### Deploy Steps

1. Push code to server
2. Install dependencies: `pip install -r requirements.txt`
3. Run migrations: `python manage.py migrate`
4. Collect static files: `python manage.py collectstatic`
5. Seed data: `python manage.py seed_data`
6. Create superuser: `python manage.py createsuperuser`
7. Configure web server (nginx/Apache)
8. Start application server (gunicorn/uwsgi)

## Troubleshooting

### Images Not Displaying

**Problem**: Uploaded images show broken links

**Solution**: 
- Check `MEDIA_URL` and `MEDIA_ROOT` in settings
- Verify media URLs in `config/urls.py`
- Ensure media folder has write permissions

### Migrations Error

**Problem**: "No such table" errors

**Solution**:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Admin Styling Issues

**Problem**: Admin panel looks unstyled

**Solution**:
```bash
python manage.py collectstatic
```

### Seed Command Not Found

**Problem**: "Unknown command: seed_data"

**Solution**:
- Verify `__init__.py` files exist in management folders
- Restart Django server
- Check file is named `seed_data.py` (not `seed-data.py`)

## Support Documentation

- **MEDIA_SETUP.md** - Media files and uploads
- **BLOG_SETUP.md** - Blog system details
- **SEED_DATA.md** - Seed data command
- **GALLERY_VIDEO_CSS.md** - Video styling

## Next Steps

1. ✓ Complete setup following this guide
2. Review seeded content in admin
3. Customize content as needed
4. Add more blog posts
5. Upload custom images/videos
6. Test all functionality
7. Deploy to production

## Success Criteria

Your setup is complete when:
- All pages load without errors
- Hero slider works on homepage
- Gallery displays with pagination
- Blog posts are accessible
- Admin panel is functional
- Media uploads work
- Seed data is visible

Congratulations! Your dynamic Hulegeb website is ready! 🎉
