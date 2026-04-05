# Blue Breeze Resort - Image Assets Setup Guide

## 📁 Assets Folder Structure

I've created a dedicated `assets/` folder structure for your custom images. Here's how it's organized:

```
assets/
├── images/
│   ├── gallery/          # Gallery section images (6 images)
│   │   ├── beach-1.jpg
│   │   ├── pool-1.jpg
│   │   ├── dining-1.jpg
│   │   ├── spa-1.jpg
│   │   ├── rooms-1.jpg
│   │   └── activities-1.jpg
│   ├── rooms/          # Room type images (6 images)
│   │   ├── ocean-view-suite.jpg
│   │   ├── beach-villa.jpg
│   │   ├── garden-room.jpg
│   │   ├── family-suite.jpg
│   │   ├── honeymoon-suite.jpg
│   │   └── presidential-suite.jpg
│   ├── hero/           # Hero section background (1 image)
│   │   └── hero-bg.jpg
│   └── logo/           # Logo images (optional)
│       └── logo.png
└── README.md            # This setup guide
```

## 🔄 How to Use Your Custom Images

### Option 1: Replace Existing Files (Recommended)
1. **Prepare your images** with these recommended sizes:
   - **Gallery images**: 800x600px minimum
   - **Room images**: 800x600px minimum
   - **Hero image**: 1920x1080px (16:9 ratio)

2. **Rename your images** to match the exact filenames in the folder structure

3. **Replace the files** in the respective folders with your images

4. **Test the website** - your images will automatically load

### Option 2: Update Filenames (Advanced)
If you want to use different filenames, you'll need to update:
- **HTML file**: Update the `src="assets/images/gallery/..."` paths
- **JavaScript file**: Update the `image` properties in the `roomsData` array

## 🖼️ Current Setup Features

### ✅ Smart Fallback System
The website includes intelligent fallback functionality:
- **Local images load first** from your `assets/images/` folders
- **If local images are missing**, it automatically loads high-quality images from Unsplash
- **No broken images** - your website always looks professional

### ✅ Easy Image Replacement
- **Keep the same filenames** and just replace the files
- **No code changes needed** if you use the provided structure
- **Instant updates** - refresh your browser to see changes

## 📸 Photography Recommendations

### Gallery Images (6 images)
- **beach-1.jpg**: Ocean views, beach scenes, coastline shots
- **pool-1.jpg**: Swimming pool areas, poolside amenities
- **dining-1.jpg**: Restaurant interiors, food presentation, dining areas
- **spa-1.jpg**: Spa facilities, treatment rooms, wellness areas
- **rooms-1.jpg**: Room interiors, suites, accommodations
- **activities-1.jpg**: Water sports, activities, entertainment

### Room Images (6 images)
- **ocean-view-suite.jpg**: Your actual ocean view suite
- **beach-villa.jpg**: Beachfront villa with private access
- **garden-room.jpg**: Garden view rooms with tropical surroundings
- **family-suite.jpg**: Family-friendly accommodations
- **honeymoon-suite.jpg**: Romantic suite with special amenities
- **presidential-suite.jpg**: Most luxurious accommodation

### Hero Image (1 image)
- **hero-bg.jpg**: Stunning resort overview or signature view
- **Recommended**: Use your most impressive resort photo
- **Size**: 1920x1080px for best quality across all devices

## 🛠️ Technical Details

### Image Optimization
```
Recommended specifications:
- Format: JPG for photos, PNG for graphics with transparency
- Compression: Optimize for web (80-90% quality)
- File size: Keep under 500KB per image for fast loading
- Dimensions: Follow the recommended sizes for best display
```

### Error Handling
The code includes smart error handling:
```javascript
<img src="assets/images/gallery/beach-1.jpg" 
     alt="Beach View" 
     onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop'">
```

This ensures your website always displays beautiful images even if your local files aren't ready yet.

## 🚀 Quick Start Steps

1. **Take photos** of your resort following the recommendations above
2. **Resize and optimize** your images for web use
3. **Copy your images** to the appropriate folders
4. **Use the exact filenames** provided in the structure
5. **Refresh your website** to see your custom images

## 💡 Pro Tips

### Photography Best Practices
- **Golden hour**: Take photos during sunrise/sunset for best lighting
- **Multiple angles**: Capture each area from different perspectives
- **People and atmosphere**: Include guests enjoying facilities (with permission)
- **Seasonal variety**: Consider how your resort looks in different seasons

### Image Management
- **Backup originals**: Keep high-resolution originals safe
- **Consistent naming**: Use the provided naming convention
- **Regular updates**: Refresh images seasonally or when areas are renovated
- **Quality check**: Test loading times on mobile devices

## 📞 Need Help?

If you encounter any issues:
1. **Check file paths** - ensure images are in the correct folders
2. **Verify filenames** - match the exact names in the structure
3. **Test fallbacks** - remove your image temporarily to test Unsplash fallback
4. **Image optimization** - ensure files aren't too large

Your website is now ready for your custom resort images! The fallback system ensures it always looks professional while you prepare your photos.