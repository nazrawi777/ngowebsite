# Media Files Setup

## Configuration Complete ✓

Media file uploads are now fully configured for Hero Slides and Gallery Items (images AND videos).

## Features

### Gallery Items - Image OR Video Support
The gallery now supports **both images and videos**:

**For Images:**
1. **Upload Image File**: Upload directly from your computer
2. **External URL**: Provide a URL to an image hosted elsewhere

**For Videos:**
1. **Upload Video File**: Upload MP4, WebM, or other video formats
2. **External URL**: Provide a YouTube, Vimeo, or direct video URL
3. **Optional Thumbnail**: Upload a custom thumbnail for the video

**Note**: Based on the media type selected, at least one source (upload or URL) must be provided.

### Models Configured

#### 1. HeroSlide
- Upload path: `media/hero_slides/`
- Used on: Homepage hero slider
- Fields: title, headings, description, image/URL, alt text
- Supports: Images only

#### 2. GalleryItem (formerly GalleryImage)
- Upload paths: 
  - Images: `media/gallery/images/`
  - Videos: `media/gallery/videos/`
  - Thumbnails: `media/gallery/thumbnails/`
- Used on: Image Gallery page
- Fields: title, media_type, image/video, URLs, alt text, thumbnail
- Supports: **Both images and videos**
- Pagination: 12 items per page

## Admin Panel

Access the admin panel at `/admin/` to manage media:

- **Gallery Items**: Add images or videos with type selection
  - Choose "Image" or "Video" from media type dropdown
  - Fill in appropriate fields based on type
  - Videos show play button overlay on frontend
  
- **Hero Slides**: Manage homepage slider content (images only)

Both show "Uploaded" column to indicate if file was uploaded vs URL.

## Video Support Features

- **YouTube Integration**: Automatically detects YouTube URLs and creates embeds
- **Direct Video Files**: Supports uploaded MP4, WebM files
- **Custom Thumbnails**: Optional thumbnail upload for videos
- **Play Button Overlay**: Automatic play icon on video items

## File Structure

```
project/
├── media/                    # Created automatically on first upload
│   ├── hero_slides/         # Hero slider images
│   └── gallery/
│       ├── images/          # Gallery images
│       ├── videos/          # Gallery videos
│       └── thumbnails/      # Video thumbnails
├── static/                  # Static assets (CSS, JS, etc.)
└── templates/               # HTML templates
```

## CSS Styling

Add the video play button styles from `GALLERY_VIDEO_CSS.md` to your `static/css/custom.css` file.

## Development

Media files are served automatically in development mode (DEBUG=True).

The media folder is in `.gitignore` - uploaded files won't be committed to git.

## Production Deployment

For production, configure your web server (nginx/Apache) to serve media files, or use a cloud storage service like AWS S3.

## Next Steps

1. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

2. Create a superuser (if not already done):
   ```bash
   python manage.py createsuperuser
   ```

3. Start the server:
   ```bash
   python manage.py runserver
   ```

4. Go to `http://127.0.0.1:8000/admin/` and start adding images and videos!

## Usage Tips

- For best performance, compress videos before uploading
- Recommended video formats: MP4 (H.264), WebM
- For YouTube videos, just paste the full YouTube URL
- Add thumbnails to videos for better visual presentation
- Use the "order" field to control display sequence

