# External CDN Setup Guide

## Overview
This guide explains how to activate the external CDN for large images while keeping the main site on Vercel.

## Current Architecture
- **Main site**: `christinamday.com` → Vercel (fast, global CDN)
- **Large images**: Will be served from `cdn.christinamday.com` → hosting.com (cost-effective storage)
- **Small images**: Stay on Vercel (optimal performance)

## DNS Setup Required

### 1. Create CDN Subdomain
Add a DNS record for `cdn.christinamday.com`:

```
Type: A Record
Name: cdn
Value: 106.0.62.101
TTL: 3600 (1 hour)
```

### 2. Verify Setup
Once DNS propagates (usually 5-60 minutes), test:

```bash
# Should resolve to hosting.com server
nslookup cdn.christinamday.com

# Should return 200 OK with image
curl -I "https://cdn.christinamday.com/images/zerocater-web-2015.png"
```

## How Smart Routing Works

### Large Images (2MB+) → External CDN
These images automatically use `cdn.christinamday.com`:
- `zc_website_2015.gif` (10.3MB)
- `zc_website_2017.gif` (6.5MB)
- `Screen Shot 2020-06-15 at 7.36.53 PM.png` (4.4MB)
- And 9 more large images...

### Small Images → Vercel CDN
All other images stay on Vercel for optimal performance.

## Environment Variables

### Development (.env.local)
```bash
NEXT_PUBLIC_CDN_URL=http://localhost:3000
NEXT_PUBLIC_EXTERNAL_CDN_URL=https://cdn.christinamday.com
```

### Production (Vercel Dashboard)
```bash
NEXT_PUBLIC_CDN_URL=https://christinamday.com
NEXT_PUBLIC_EXTERNAL_CDN_URL=https://cdn.christinamday.com
```

## Benefits

✅ **Reduced Vercel deployment size** (48MB saved immediately)  
✅ **Cost optimization** (large images on cheaper hosting.com)  
✅ **Performance optimization** (small images on fast Vercel CDN)  
✅ **Automatic routing** (no code changes needed for new images)  
✅ **Fallback support** (graceful degradation if CDN is down)  

## Current Status

- ✅ Large images uploaded to hosting.com server
- ✅ Smart routing code implemented
- ✅ Local images removed (48MB saved)
- ⏳ DNS setup needed for `cdn.christinamday.com`
- ⏳ Environment variables need to be set in Vercel

## Testing

Once DNS is set up, you can test the smart routing:

```bash
# Check which images use external CDN
npm run check-cdn-routing

# Verify all images load correctly
npm run test-image-loading
``` 