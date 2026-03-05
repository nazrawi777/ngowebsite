#!/usr/bin/env python
"""
Fix malformed Django static tags in templates
"""
import re
from pathlib import Path

def fix_template(file_path):
    """Fix malformed static tags in a template file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Fix escaped backslash before quote: %}\" -> %}"
    content = content.replace(r'%}\"', '%}"')
    content = content.replace(r"%}\'", "%}'")
    
    # Fix the main issue: {% static 'path' %} alt= -> {% static 'path' %}" alt=
    content = re.sub(
        r"{% static '([^']+)' %}\s+(alt|class|id|width|height|data-[a-z\-]+)=",
        r"{% static '\1' %}\" \2=",
        content
    )
    
    # Also fix for double quotes
    content = re.sub(
        r'{% static "([^"]+)" %}\s+(alt|class|id|width|height|data-[a-z\-]+)=',
        r'{% static "\1" %}" \2=',
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
    print("Fixing Django Template Static Tags")
    print("=" * 50)
    
    html_files = list(templates_dir.glob('*.html'))
    fixed_count = 0
    
    for html_file in html_files:
        if fix_template(html_file):
            fixed_count += 1
    
    print("=" * 50)
    print(f"✓ Fixed {fixed_count} of {len(html_files)} templates")
    print("=" * 50)
    print("\nPlease refresh your browser (Ctrl+Shift+R) to see the changes!")

if __name__ == '__main__':
    main()
