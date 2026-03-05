from django.contrib import admin
from .models import HeroSlide, GalleryItem, BlogPost


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published_date', 'is_published', 'is_featured', 'created_at')
    list_filter = ('is_published', 'is_featured', 'published_date', 'created_at')
    search_fields = ('title', 'excerpt', 'content', 'author')
    list_editable = ('is_published', 'is_featured')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'published_date'
    ordering = ('-published_date', '-created_at')
    
    fieldsets = (
        ('Content', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'author')
        }),
        ('Featured Image (Choose One)', {
            'fields': ('featured_image', 'featured_image_url', 'image_alt'),
            'description': 'Upload an image file OR provide an external URL. At least one is required.'
        }),
        ('Publishing', {
            'fields': ('published_date', 'is_published', 'is_featured')
        }),
        ('SEO', {
            'fields': ('meta_description',),
            'classes': ('collapse',)
        }),
    )


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'media_type', 'order', 'is_active', 'has_uploaded_media', 'created_at')
    list_filter = ('media_type', 'is_active', 'created_at')
    search_fields = ('title', 'alt_text')
    list_editable = ('order', 'is_active')
    ordering = ('order', '-created_at')
    
    fieldsets = (
        ('Media Information', {
            'fields': ('title', 'media_type', 'alt_text')
        }),
        ('Image Source (for Image type)', {
            'fields': ('image', 'image_url'),
            'description': 'Upload an image file OR provide an external URL.'
        }),
        ('Video Source (for Video type)', {
            'fields': ('video', 'video_url', 'video_thumbnail'),
            'description': 'Upload a video file OR provide an external URL (YouTube, Vimeo, etc.). Optionally add a thumbnail.'
        }),
        ('Display Settings', {
            'fields': ('order', 'is_active')
        }),
    )
    
    def has_uploaded_media(self, obj):
        if obj.media_type == 'image':
            return bool(obj.image)
        elif obj.media_type == 'video':
            return bool(obj.video)
        return False
    has_uploaded_media.boolean = True
    has_uploaded_media.short_description = 'Uploaded'


@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ('title', 'heading_part1', 'heading_part2', 'order', 'is_active', 'has_uploaded_image', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title', 'heading_part1', 'heading_part2', 'description')
    list_editable = ('order', 'is_active')
    ordering = ('order', '-created_at')
    
    fieldsets = (
        ('Content', {
            'fields': ('title', 'heading_part1', 'heading_part2', 'heading_part3', 'description')
        }),
        ('Image Source (Choose One)', {
            'fields': ('image', 'image_url', 'image_alt'),
            'description': 'Upload an image file OR provide an external URL. At least one is required.'
        }),
        ('Display Settings', {
            'fields': ('order', 'is_active')
        }),
    )
    
    def has_uploaded_image(self, obj):
        return bool(obj.image)
    has_uploaded_image.boolean = True
    has_uploaded_image.short_description = 'Uploaded'


