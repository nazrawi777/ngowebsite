#!/usr/bin/env python
"""
Convert templates to use proper Django {% static %} tags
"""
import re
from pathlib import Path

def fix_template(file_path):
    """Convert direct paths to Django static tags"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Ensure {% load static %} is at the top
    if '{% load static %}' not in content:
        content = content.replace('<!DOCTYPE html>', '{% load static %}\n<!DOCTYPE html>')
    
    # Convert /css/ paths to {% static 'css/...' %}
    content = re.sub(r'(href|src)="/css/([^"]+)"', r'\1="{% static \'css/\2\' %}"', content)
    
    # Convert /js/ paths to {% static 'js/...' %}
    content = re.sub(r'(href|src)="/js/([^"]+)"', r'\1="{% static \'js/\2\' %}"', content)
    
    # Convert /images/ paths to {% static 'images/...' %}
    content = re.sub(r'(href|src)="/images/([^"]+)"', r'\1="{% static \'images/\2\' %}"', content)
    
    # Convert /assets/ paths to {% static 'assets/...' %}
    content = re.sub(r'(href|src)="/assets/([^"]+)"', r'\1="{% static \'assets/\2\' %}"', content)
    
    # Convert /webfonts/ paths to {% static 'webfonts/...' %}
    content = re.sub(r'(href|src)="/webfonts/([^"]+)"', r'\1="{% static \'webfonts/\2\' %}"', content)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Converted {file_path.name}")
        return True
    else:
        print(f"  {file_path.name} - no changes needed")
        return False

def main():
    """Convert all templates to use Django static tags"""
    templates_dir = Path('templates')
    
    if not templates_dir.exists():
        print("❌ Templates directory not found!")
        return
    
    print("=" * 60)
    print("Converting Templates to Django Static System")
    print("=" * 60)
    
    html_files = list(templates_dir.glob('*.html'))
    converted_count = 0
    
    for html_file in html_files:
        if fix_template(html_file):
            converted_count += 1
    
    print("=" * 60)
    print(f"✓ Converted {converted_count} of {len(html_files)} templates")
    print("=" * 60)
    print("\nAll static files are now in the 'static/' directory:")
    print("  static/css/")
    print("  static/js/")
    print("  static/images/")
    print("  static/assets/")
    print("  static/webfonts/")
    print("\nTemplates now use {% static %} tags for all assets.")
    print("\nRestart your Django server and hard refresh your browser!")

if __name__ == '__main__':
    main()
