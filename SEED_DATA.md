# Seed Data Command

## Overview

A Django management command to populate the database with initial data for HeroSlide, GalleryItem, and BlogPost models.

## What Gets Seeded

### 1. Hero Slides (3 items)
- Main homepage slider content
- Three different slides with titles, headings, descriptions, and images
- All active and ordered

### 2. Gallery Items (9 items)
- Mix of workshop, production, and artisan images
- All using external image URLs
- Ordered for optimal display
- Includes: weaving workshops, furniture production, training sessions, carpets, textiles

### 3. Blog Posts (6 items)
- Complete blog articles with full content
- Topics covering:
  - Disabled-led business model
  - Day in the life of artisans
  - Trainee to trainer transformations
  - Social enterprise economics
  - Traditional crafts in modern markets
  - Disability rights and economic justice
- All published with proper dates, excerpts, and SEO metadata
- One featured post

## Usage

### First Time Setup

1. Make sure migrations are run:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

2. Run the seed command:
   ```bash
   python manage.py seed_data
   ```

### Output

The command will show progress:
```
Starting data seeding...
Seeding Hero Slides...
  ✓ Created: Hulegeb - Weaving Dignity
  ✓ Created: Hulegeb - Empowering Communities
  ✓ Created: Hulegeb - Traditional Crafts
Seeding Gallery Items...
  ✓ Created: Weaving Workshop
  ✓ Created: Furniture Production
  ...
Seeding Blog Posts...
  ✓ Created: Beyond Charity: How a Disabled-Led Model Builds True Independence
  ✓ Created: Weaving Dignity: A Day in the Life of a Hulegeb Artisan
  ...
✓ Data seeding completed successfully!
```

### Re-running the Command

The command is **idempotent** - it won't create duplicates. If data already exists, it will show:
```
  - Already exists: Hulegeb - Weaving Dignity
```

This means you can safely run it multiple times.

## Data Details

### Hero Slides
- **Slide 1**: "Weaving Dignity, Crafting Independence" - Main message about 70-year history
- **Slide 2**: "Empowering Communities, Building Futures" - Focus on training and employment
- **Slide 3**: "Traditional Crafts, Modern Impact" - Highlighting products and artisans

### Gallery Items
All items use real Hulegeb images:
- Workshop and production floor scenes
- Artisans at work
- Finished products (carpets, textiles, furniture)
- Training sessions
- Community impact

### Blog Posts
Full-length articles (500-1000 words each):
1. **Beyond Charity** - The disabled-led model philosophy
2. **Weaving Dignity** - Personal story of artisan Alemayehu
3. **Trainee to Trainer** - Transformation story of Meseret
4. **Economics of Empowerment** - Business model explanation
5. **Traditional Crafts** - Heritage meets modern markets
6. **Disability Rights** - Economic justice perspective

All posts include:
- SEO-optimized titles and meta descriptions
- Proper slugs for URLs
- Featured images
- Publication dates (staggered over past 3 weeks)
- Full content ready for display

## Customization

To modify the seed data, edit `src/management/commands/seed_data.py`:

- **Add more items**: Append to the `*_data` lists
- **Change content**: Modify the dictionaries in the data lists
- **Add new models**: Create new `seed_*` methods

## Verification

After seeding, verify the data:

1. **Admin Panel**: Go to `/admin/` and check each model
2. **Frontend**: 
   - Homepage: Check hero slider
   - `/blog/`: See all blog posts
   - `/image-gallery/`: View gallery items

## Troubleshooting

**Error: "No module named 'src.management'"**
- Make sure `__init__.py` files exist in:
  - `src/management/`
  - `src/management/commands/`

**Error: "Table doesn't exist"**
- Run migrations first: `python manage.py migrate`

**Duplicate data**
- The command uses `get_or_create()` to prevent duplicates
- Safe to run multiple times

## Production Use

For production deployment:

1. Run migrations on production server
2. Run seed command: `python manage.py seed_data`
3. Verify data through admin panel
4. Optionally, add more content through admin interface

## Next Steps

After seeding:
1. Review content in admin panel
2. Customize any text or images as needed
3. Add more blog posts, gallery items, or hero slides
4. Update publication dates if needed
5. Test all pages to ensure data displays correctly

The seed data provides a complete, production-ready starting point for your website!
