# Portfolio 2025 Documentation

Welcome to the documentation hub for your portfolio site! This directory contains all the rules, workflows, and guides you need.

## 📚 Documentation Index

### 🖼️ **Image Management**
- **[Image Workflow Guide](../IMAGE-WORKFLOW.md)** - Complete guide for adding small and large images
- **[CDN Setup Guide](../CDN-SETUP.md)** - How the smart CDN architecture works

### 🚀 **Deployment & Infrastructure**
- **[Vercel Deployment](deployment.md)** - Deployment process and environment variables
- **[CDN Architecture](cdn-architecture.md)** - Technical details of the hybrid CDN setup
- **[Performance Monitoring](performance.md)** - Monitoring deployment size and performance

### 💻 **Development**
- **[Code Standards](code-standards.md)** - Coding conventions and best practices
- **[Component Guidelines](components.md)** - How to create and organize components
- **[Project Structure](project-structure.md)** - File organization and naming conventions

### 🛠️ **Maintenance**
- **[Troubleshooting](troubleshooting.md)** - Common issues and solutions
- **[Scripts Reference](scripts.md)** - All available npm scripts and their usage
- **[Environment Setup](environment.md)** - Local development setup

### 📸 **Screenshots & Automation**
- **[Screenshot Tools](screenshots.md)** - Taking screenshots of websites for case studies

## 🔧 Quick Commands

```bash
# Get help with image workflows
npm run help

# View full image workflow
npm run workflow

# Check deployment size
npm run check-size

# Find large images
npm run check-large-images

# Take screenshots of websites
npm run screenshot-updrift

# View this documentation
npm run docs
```

## 📝 Adding New Documentation

When you create new rules or workflows:

1. **Create a new `.md` file** in the `docs/` directory
2. **Add it to this index** with a brief description
3. **Reference it in relevant scripts** if needed
4. **Keep it simple and actionable**

## 🎯 Documentation Principles

- **One topic per file** - Keep docs focused
- **Step-by-step instructions** - Make it easy to follow
- **Include examples** - Show, don't just tell
- **Update regularly** - Keep docs current with code changes

---

*Last updated: June 2025* 