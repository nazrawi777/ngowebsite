#!/usr/bin/env python
"""
Script to update all HTML templates to use Django's {% static %} template tag
"""
import os
import re
from pathlib import Path

def update_template(file_path):
    """Update a single template file to use Django static tags"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has {% load static %}
    if '{% load static %}' not in content:
        # Add {% load static %} at the top after DOCTYPE
        if '<!DOCTYPE html>' in content:
            content = content.replace(
                '<!DOCTYPE html>',
                '{% load static %}\n<!DOCTYPE html>'
            )
    
    # Replace CSS/JS/Image references with proper Django static tags
    # Pattern: href="css/file.css" -> href="{% static 'css/file.css' %}"
    
    # Fix any malformed static tags first
    content = re.sub(r"{% static \\'([^']+)' %}\\'", r"{% static '\1' %}'", content)
    content = re.sub(r'{% static \\"([^"]+)" %}\\', r'{% static "\1" %}', content)
    
    # Replace href and src attributes for local files
    patterns = [
        # CSS files
        (r'href="(css/[^"]+)"', r'href="{% static \'\1\' %}"'),
        # JS files
        (r'src="(js/[^"]+)"', r'src="{% static \'\1\' %}"'),
        # Images
        (r'src="(images/[^"]+)"', r'src="{% static \'\1\' %}"'),
        # Assets
        (r'src="(assets/[^"]+)"', r'src="{% static \'\1\' %}"'),
        # Webfonts
        (r'src="(webfonts/[^"]+)"', r'src="{% static \'\1\' %}"'),
    ]
    
    for pattern, replacement in patterns:
        # Only replace if not already a static tag
        content = re.sub(
            pattern,
            lambda m: replacement.replace(r'\1', m.group(1)) if '{% static' not in m.group(0) else m.group(0),
            content
        )
    
    # Update internal links to use Django URL tag
    link_patterns = [
        (r'href="index\.html"', r'href="{% url \'index\' %}"'),
        (r'href="about\.html"', r'href="{% url \'about\' %}"'),
        (r'href="services\.html"', r'href="{% url \'services\' %}"'),
        (r'href="products\.html"', r'href="{% url \'products\' %}"'),
        (r'href="store\.html"', r'href="{% url \'store\' %}"'),
        (r'href="blog\.html"', r'href="{% url \'blog\' %}"'),
        (r'href="contact\.html"', r'href="{% url \'contact\' %}"'),
        (r'href="team\.html"', r'href="{% url \'team\' %}"'),
        (r'href="programmes\.html"', r'href="{% url \'programmes\' %}"'),
        (r'href="video-gallery\.html"', r'href="{% url \'video_gallery\' %}"'),
        (r'href="image-gallery\.html"', r'href="{% url \'image_gallery\' %}"'),
        (r'href="donation\.html"', r'href="{% url \'donation\' %}"'),
        (r'href="ourhistory\.html"', r'href="{% url \'ourhistory\' %}"'),
    ]
    
    for pattern, replacement in link_patterns:
        # Only replace if not already a url tag
        content = re.sub(
            pattern,
            lambda m: replacement if '{% url' not in m.group(0) else m.group(0),
            content
        )
    
    # Write updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated {file_path.name}")
    return True

def main():
    """Update all templates in the templates directory"""
    templates_dir = Path('templates')
    
    if not templates_dir.exists():
        print("❌ Templates directory not found!")
        return
    
    print("=" * 50)
    print("Updating Django Templates")
    print("=" * 50)
    
    html_files = list(templates_dir.glob('*.html'))
    updated_count = 0
    
    for html_file in html_files:
        if update_template(html_file):
            updated_count += 1
    
    print("=" * 50)
    print(f"✓ Updated {updated_count} of {len(html_files)} templates")
    print("=" * 50)

if __name__ == '__main__':
    main()
