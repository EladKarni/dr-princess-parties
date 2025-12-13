# Coolify Deployment Guide

This guide explains how to deploy the Dr. Princess Parties website on Coolify with MongoDB.

## Architecture

- **Next.js Application**: Main web application
- **MongoDB**: Database for Payload CMS
- **Local File Storage**: Media files stored on server disk

## Prerequisites

- Coolify instance running
- Git repository connected to Coolify

## Setup Instructions

### 1. Create MongoDB Service in Coolify

1. In Coolify dashboard, go to your project
2. Click "Add Resource" → "Database" → "MongoDB"
3. Configure:
   - **Name**: `dr-princess-mongodb`
   - **Version**: `7.0` (or latest)
   - **Root Username**: `payload`
   - **Root Password**: Generate a strong password (save it!)
   - **Database Name**: `dr_princess_parties`
4. Deploy the MongoDB service
5. Note the internal connection string (usually: `mongodb://payload:password@dr-princess-mongodb:27017/dr_princess_parties?authSource=admin`)

### 2. Deploy Next.js Application

1. In Coolify, click "Add Resource" → "Application"
2. Connect your Git repository
3. Configure:
   - **Build Pack**: Nixpacks (auto-detected for Next.js)
   - **Port**: `3000`
   - **Branch**: `main` or your deployment branch

### 3. Set Environment Variables

In the application settings, add these environment variables:

```bash
# Payload CMS Secret (generate a random string)
PAYLOAD_SECRET=your-random-secret-key-here

# MongoDB Connection (use the internal service name)
DATABASE_URL=mongodb://payload:YOUR_PASSWORD@dr-princess-mongodb:27017/dr_princess_parties?authSource=admin

# Server URL (your Coolify domain)
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
```

**Important Notes:**
- Replace `YOUR_PASSWORD` with the MongoDB password you set
- Replace `your-domain.com` with your actual Coolify-assigned domain
- The MongoDB hostname should be the service name (`dr-princess-mongodb`)

### 4. Configure Persistent Storage for Media Files

1. In Coolify application settings, go to "Storages"
2. Add a persistent volume:
   - **Source Path**: `/data/dr-princess-media` (on Coolify server)
   - **Destination Path**: `/app/public/media` (in container)
3. This ensures uploaded media files persist across deployments

### 5. Deploy

1. Click "Deploy" in Coolify
2. Monitor the build logs
3. Once deployed, access your application at the assigned URL

### 6. Initial Setup

1. Visit `https://your-domain.com/admin`
2. Create your first admin user
3. Configure:
   - Hero Section (Global)
   - About Section (Global)
   - Contact Section (Global)
4. Upload media files
5. Add content (Characters, Services, Testimonials, Projects)

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PAYLOAD_SECRET` | Secret key for Payload CMS auth | Random 32+ character string |
| `DATABASE_URL` | MongoDB connection string | `mongodb://payload:pass@mongodb:27017/db?authSource=admin` |
| `NEXT_PUBLIC_SERVER_URL` | Public URL of your site | `https://drprincess.com` |

## Troubleshooting

### Database Connection Issues

If you see "MongooseServerSelectionError":
1. Verify MongoDB service is running in Coolify
2. Check the DATABASE_URL format matches the internal service name
3. Ensure MongoDB and Next.js app are in the same Coolify project

### Media Files Not Persisting

If uploaded files disappear after redeployment:
1. Ensure persistent storage is configured (see step 4)
2. Verify the destination path is `/app/public/media`
3. Check file permissions in the container

### Build Failures

Common issues:
- **Out of memory**: Increase build resources in Coolify
- **Missing dependencies**: Run `yarn install` locally to update lockfile
- **TypeScript errors**: Fix errors locally before pushing

## Updating the Application

1. Push changes to your Git repository
2. Coolify will automatically rebuild and redeploy (if auto-deploy is enabled)
3. Or manually trigger deployment in Coolify dashboard

## Backup Strategy

### Database Backup

Use Coolify's built-in MongoDB backup feature:
1. Go to MongoDB service settings
2. Enable automatic backups
3. Configure backup frequency

### Media Files Backup

Since media is stored on disk:
1. Use Coolify's backup for the persistent volume
2. Or manually backup `/data/dr-princess-media` on the Coolify server

## Scaling Considerations

For production with high traffic:
- **MongoDB**: Upgrade to a replica set for high availability
- **Next.js**: Enable multiple instances in Coolify for load balancing
- **Media Storage**: Consider object storage (S3, MinIO) for larger deployments
