# Troubleshooting Guide

## 🚨 Common Issues & Solutions

### 📸 Image Issues

#### Problem: Large Image Not Loading
**Symptoms:** Image shows as broken on site
```bash
# Check if image is in CDN
curl -I "http://cdn.christinamday.com/images/your-image.png"

# Should return: HTTP/1.1 200 OK
```

**Solutions:**
1. **Check LARGE_IMAGES array** in `src/utils/cdnUtils.ts`
2. **Verify CDN upload** worked correctly
3. **Clear browser cache** and try again

#### Problem: Upload Script Fails
**Symptoms:** `./upload-new-large-image.sh` returns errors

**Solutions:**
1. **Check FTP credentials** in the script
2. **Verify file path** has no special characters
3. **Try manual FTP upload** to test connection

### 🚀 Deployment Issues

#### Problem: Vercel Build Fails
**Symptoms:** Deployment fails in Vercel dashboard

**Solutions:**
1. **Check build logs** in Vercel dashboard
2. **Run `npm run build` locally** to test
3. **Verify environment variables** are set correctly

#### Problem: Deployment Size Too Large
**Symptoms:** Build fails with size limit error

```bash
# Check current size
npm run check-size

# Find large images to move to CDN
npm run check-large-images
```

**Solutions:**
1. **Move largest images to CDN** using large image workflow
2. **Remove unused files** from repository
3. **Optimize remaining images**

### 🌐 CDN Issues

#### Problem: CDN Images Load Slowly
**Symptoms:** Large images take long to load

**Solutions:**
1. **Check hosting.com server status**
2. **Verify DNS resolution** for cdn.christinamday.com
3. **Consider image optimization** before upload

#### Problem: DNS Not Resolving
**Symptoms:** `nslookup cdn.christinamday.com` fails

**Solutions:**
1. **Check Cloudflare DNS settings**
2. **Wait for DNS propagation** (up to 24 hours)
3. **Verify A record** points to correct IP

## 🔧 Diagnostic Commands

```bash
# Check deployment size
npm run check-size

# Find large images
npm run check-large-images

# Test CDN connectivity
curl -I "http://cdn.christinamday.com/images/test-large.png"

# Check DNS resolution
nslookup cdn.christinamday.com

# Test local build
npm run build

# View all available commands
npm run help
```

## 📞 When to Ask for Help

- **FTP credentials stop working**
- **DNS configuration issues**
- **Build errors you can't resolve**
- **Performance problems**
- **New workflow needs**

## 💡 Prevention Tips

1. **Always check image size** before adding: `du -h public/images/image.png`
2. **Monitor deployment size** regularly: `npm run check-size`
3. **Test CDN uploads** after each large image addition
4. **Keep documentation updated** when workflows change 