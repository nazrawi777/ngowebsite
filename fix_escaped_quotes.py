#!/usr/bin/env python
"""
Fix escaped quotes in static tags
"""
import re
from pathlib import Path

def fix_template(file_path):
    """Remove escaped backslashes from static tags"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Fix: {% static \'path\' %} -> {% static 'path' %}
    content = content.replace(r"{% static \'", "{% static '")
    content = content.replace(r"\' %}", "' %}")
    
    # Fix: {% static \"path\" %} -> {% static "path" %}
    content = content.replace(r'{% static \"', '{% static "')
    content = content.replace(r'\" %}', '" %}')
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path.name}")
        return True
    else:
        print(f"  {file_path.name} - no changes needed")
        return False

def main():
    """Fix all templates"""
    templates_dir = Path('templates')
    
    if not templates_dir.exists():
        print("❌ Templates directory not found!")
        return
    
    print("=" * 50)
    print("Fixing Escaped Quotes in Static Tags")
    print("=" * 50)
    
    html_files = list(templates_dir.glob('*.html'))
    fixed_count = 0
    
    for html_file in html_files:
        if fix_template(html_file):
            fixed_count += 1
    
    print("=" * 50)
    print(f"✓ Fixed {fixed_count} of {len(html_files)} templates")
    print("=" * 50)

if __name__ == '__main__':
    main()
