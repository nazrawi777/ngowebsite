#!/usr/bin/env python
"""
Fix static paths - remove directory prefix since Django adds /static/ automatically
"""
import re
from pathlib import Path

def fix_template(file_path):
    """Fix static paths in a template file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Since we're serving files directly from /css/, /js/, /images/, etc.
    # We should NOT use {% static %} tag for these
    # Instead, use direct paths
    
    # Replace {% static 'css/...' %} with /css/...
    content = re.sub(r"{% static 'css/([^']+)' %}", r'/css/\1', content)
    content = re.sub(r'{% static "css/([^"]+)" %}', r'/css/\1', content)
    
    # Replace {% static 'js/...' %} with /js/...
    content = re.sub(r"{% static 'js/([^']+)' %}", r'/js/\1', content)
    content = re.sub(r'{% static "js/([^"]+)" %}', r'/js/\1', content)
    
    # Replace {% static 'images/...' %} with /images/...
    content = re.sub(r"{% static 'images/([^']+)' %}", r'/images/\1', content)
    content = re.sub(r'{% static "images/([^"]+)" %}', r'/images/\1', content)
    
    # Replace {% static 'assets/...' %} with /assets/...
    content = re.sub(r"{% static 'assets/([^']+)' %}", r'/assets/\1', content)
    content = re.sub(r'{% static "assets/([^"]+)" %}', r'/assets/\1', content)
    
    # Replace {% static 'webfonts/...' %} with /webfonts/...
    content = re.sub(r"{% static 'webfonts/([^']+)' %}", r'/webfonts/\1', content)
    content = re.sub(r'{% static "webfonts/([^"]+)" %}', r'/webfonts/\1', content)
    
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
    print("Fixing Static Paths in Templates")
    print("=" * 50)
    
    html_files = list(templates_dir.glob('*.html'))
    fixed_count = 0
    
    for html_file in html_files:
        if fix_template(html_file):
            fixed_count += 1
    
    print("=" * 50)
    print(f"✓ Fixed {fixed_count} of {len(html_files)} templates")
    print("=" * 50)
    print("\nStatic files will now be served from direct paths:")
    print("  /css/ - CSS files")
    print("  /js/ - JavaScript files")
    print("  /images/ - Images")
    print("  /assets/ - Assets")
    print("  /webfonts/ - Web fonts")
    print("\nPlease hard refresh your browser (Ctrl+Shift+R)!")

if __name__ == '__main__':
    main()
