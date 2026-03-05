#!/usr/bin/env python
"""
Fix CSS and JS links in templates - remove escaped backslashes and add proper quotes
"""
import re
from pathlib import Path

def fix_template(file_path):
    """Fix malformed CSS/JS links in a template file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # First, remove any escaped backslashes before quotes
    content = content.replace(r'%}\"', '%}"')
    content = content.replace(r"%}\'", "%}'")
    content = content.replace(r'%}\">',  '%}">')
    content = content.replace(r"%}'>", "%}'>")
    
    # Fix: {% static 'path' %} rel= -> {% static 'path' %}" rel=
    content = re.sub(
        r"{% static '([^']+)' %}\s+(rel|media|type|charset)=",
        r"{% static '\1' %}\" \2=",
        content
    )
    
    # Fix: {% static 'path' %}> -> {% static 'path' %}">
    content = re.sub(
        r"{% static '([^']+)' %}>",
        r"{% static '\1' %}\">",
        content
    )
    
    # Fix script tags
    content = re.sub(
        r'<script src="{% static \'([^\']+)\' %}>',
        r'<script src="{% static \'\1\' %}">',
        content
    )
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path.name}")
        return True
    else:
        print(f"  {file_path.name} - no changes needed")
        return False

def main():
    """Fix all templates in the templates directory"""
    templates_dir = Path('templates')
    
    if not templates_dir.exists():
        print("❌ Templates directory not found!")
        return
    
    print("=" * 50)
    print("Fixing CSS/JS Links in Templates")
    print("=" * 50)
    
    html_files = list(templates_dir.glob('*.html'))
    fixed_count = 0
    
    for html_file in html_files:
        if fix_template(html_file):
            fixed_count += 1
    
    print("=" * 50)
    print(f"✓ Fixed {fixed_count} of {len(html_files)} templates")
    print("=" * 50)
    print("\nPlease hard refresh your browser (Ctrl+Shift+R)!")

if __name__ == '__main__':
    main()
