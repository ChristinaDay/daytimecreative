# Image Workflow Guide

## 🤔 Which Workflow Do I Use?

### Check Image Size First:
```bash
du -h public/images/your-image.png
```

- **< 1MB** → Use Small Image Workflow
- **> 1MB** → Use Large Image Workflow

---

## 📦 Small Image Workflow (< 1MB)

### Simple 3-Step Process:
```bash
# 1. Add to project
# Drag/drop image to: public/images/your-image.png

# 2. Use in code
getImageUrl('your-image.png')  // Automatically uses Vercel

# 3. Deploy
git add . && git commit -m "Add small image" && git push
```

**Done!** ✅

---

## 🚀 Large Image Workflow (> 1MB)

### 6-Step Process:

#### Step 1: Add to Project
```bash
# Drag/drop image to: public/images/your-large-image.png
```

#### Step 2: Upload to CDN
```bash
./upload-new-large-image.sh "public/images/your-large-image.png"
```

#### Step 3: Update Smart Routing
Edit `src/utils/cdnUtils.ts` and add to LARGE_IMAGES array:
```javascript
const LARGE_IMAGES = [
  // ... existing images ...
  'your-large-image.png',  // ← Add this line
];
```

#### Step 4: Remove Local File
```bash
rm public/images/your-large-image.png
```

#### Step 5: Use in Code
```javascript
getImageUrl('your-large-image.png')  // Automatically uses CDN
```

#### Step 6: Deploy
```bash
git add . && git commit -m "Add large image via CDN" && git push
```

**Done!** ✅

---

## 🧪 Testing

### Test CDN Upload:
```bash
curl -I "http://cdn.christinamday.com/images/your-large-image.png"
# Should return: HTTP/1.1 200 OK
```

### Check Deployment Size:
```bash
npm run check-size
# Keep under 1GB (1024MB)
```

---

## 📞 Need Help?

- **Forgot workflow?** → Check this file
- **Upload script broken?** → Check FTP credentials
- **Image not loading?** → Check if added to LARGE_IMAGES array
- **Still stuck?** → Ask for help! 