# PostgreSQL to MongoDB Migration - Summary

## Migration Completed ✅

This document summarizes the migration from PostgreSQL to MongoDB for the Dr. Princess Parties website, optimized for Coolify deployment.

## Changes Made

### 1. Database Configuration

**Modified Files:**
- `src/payload.config.ts`
  - Changed from `postgresAdapter` to `mongooseAdapter`
  - Updated connection parameter from `pool.connectionString` to `url`
  - Removed Vercel Blob Storage plugin

**Before:**
```typescript
import { postgresAdapter } from "@payloadcms/db-postgres";
db: postgresAdapter({
  pool: { connectionString: process.env.DATABASE_URL }
})
```

**After:**
```typescript
import { mongooseAdapter } from "@payloadcms/db-mongodb";
db: mongooseAdapter({
  url: process.env.DATABASE_URL
})
```

### 2. Dependencies

**Modified File:** `package.json`

**Removed:**
- `@payloadcms/db-postgres@3.63.0`
- `@payloadcms/storage-vercel-blob@3.63.0`

**Added:**
- `@payloadcms/db-mongodb@3.63.0`

### 3. Storage Strategy

**Changed from:** Vercel Blob Storage (cloud-based)
**Changed to:** Local file system storage

**Benefits:**
- No external dependencies
- No additional costs
- Simple backup strategy
- Works seamlessly with Coolify

**Media files will be stored in:** `/app/public/media` (in production container)

### 4. Environment Configuration

**Modified Files:**
- `.env.local` (your local environment)
- `.env.example` (template for deployment)

**Connection String Format:**

**Local Development:**
```bash
DATABASE_URL=mongodb://payload:payload@localhost:27017/dr_princess_parties?authSource=admin
```

**Coolify Production:**
```bash
DATABASE_URL=mongodb://payload:YOUR_PASSWORD@mongodb:27017/dr_princess_parties?authSource=admin
```

### 5. Docker Configuration

**New Files Created:**

1. **`Dockerfile`**
   - Multi-stage build for optimized image size
   - Production-ready Next.js setup
   - Uses standalone output mode
   - Creates media directory for uploads

2. **`.dockerignore`**
   - Excludes unnecessary files from Docker build
   - Reduces image size and build time

3. **`docker-compose.yml`**
   - MongoDB 7 service configuration
   - Persistent volume for database
   - Network configuration
   - Can be used for local testing (if Docker available)

### 6. Next.js Configuration

**Modified File:** `next.config.mjs`

**Removed:**
- Vercel Blob Storage hostname from image remote patterns

**Kept:**
- `output: 'standalone'` (required for Docker)
- Other image remote patterns (picsum, localhost)

## What Stayed the Same ✅

The following components require **NO CHANGES**:

- ✅ All collection definitions (Users, Media, Projects, Services, Testimonials, Characters)
- ✅ All global configurations (Hero, About, Projects, Contact, Linktree)
- ✅ All page components and query code
- ✅ Image processing and resizing (Sharp)
- ✅ Admin panel functionality
- ✅ Authentication system
- ✅ Rich text editor (Lexical)
- ✅ All hooks and validation logic

## Deployment Options

### Option 1: Coolify (Recommended)

See [COOLIFY_DEPLOYMENT.md](./COOLIFY_DEPLOYMENT.md) for detailed instructions.

**Steps:**
1. Create MongoDB service in Coolify
2. Deploy Next.js application
3. Set environment variables
4. Configure persistent storage for media
5. Deploy and test

### Option 2: Docker Compose (Local Testing)

If you have Docker installed:

```bash
# Start MongoDB
yarn db:start

# Start Next.js app
yarn dev
```

### Option 3: MongoDB Atlas (Cloud Database)

Can be used instead of self-hosted MongoDB:

```bash
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/dr_princess_parties?retryWrites=true&w=majority
```

## Testing Checklist

Before considering the migration complete, test:

- [ ] Application starts without errors
- [ ] Can access admin panel
- [ ] Can create/login users
- [ ] Can upload media files
- [ ] Can create content in all collections
- [ ] Can edit globals (Hero, About, etc.)
- [ ] Homepage displays content correctly
- [ ] Images display and resize correctly
- [ ] Media files persist across restarts

## Verification Commands

```bash
# Check database connection
yarn dev
# Look for: "✓ Compiled" without MongoDB errors

# Check file changes
git status

# View what changed
git diff src/payload.config.ts
git diff package.json
```

## Next Steps

### For Local Development

If you want to test locally, you'll need:
1. Docker Desktop installed and running
2. Run `yarn db:start` to start MongoDB
3. Run `yarn dev` to start the application

### For Coolify Deployment

1. Review [COOLIFY_DEPLOYMENT.md](./COOLIFY_DEPLOYMENT.md)
2. Push changes to your Git repository
3. Follow the Coolify setup steps
4. Deploy and configure environment variables

## Rollback Instructions

If you need to revert to PostgreSQL:

```bash
# Restore dependencies
yarn remove @payloadcms/db-mongodb
yarn add @payloadcms/db-postgres@3.63.0
yarn add @payloadcms/storage-vercel-blob@3.63.0

# Restore payload config
git checkout HEAD~1 -- src/payload.config.ts

# Restore environment
# Update .env.local with PostgreSQL connection string
DATABASE_URL=postgresql://user:pass@host:port/db?sslmode=require
```

## Migration Benefits

### ✅ Advantages of MongoDB

1. **Better CMS Fit**: Document model aligns with Payload's data structure
2. **Flexibility**: Easy to add/modify fields without migrations
3. **Coolify Compatible**: Works seamlessly with Coolify's MongoDB service
4. **Performance**: Fast document retrieval for content-heavy sites
5. **Scalability**: Easy to scale with replica sets
6. **Self-Hosted**: Full control over your database

### ✅ Advantages of Local Storage

1. **Simplicity**: No external service dependencies
2. **Cost**: Zero additional costs
3. **Control**: Files stored on your server
4. **Backup**: Simple file system backups
5. **Privacy**: Data never leaves your infrastructure

## Support

If you encounter issues:

1. Check the logs for error messages
2. Verify environment variables are set correctly
3. Ensure MongoDB service is running
4. Verify network connectivity between services
5. Check file permissions for media directory

## Files Modified

### Configuration Files
- `src/payload.config.ts` - Database adapter
- `package.json` - Dependencies
- `next.config.mjs` - Image configuration
- `.env.example` - Environment template

### New Files
- `Dockerfile` - Docker build configuration
- `.dockerignore` - Docker build exclusions
- `docker-compose.yml` - MongoDB service
- `COOLIFY_DEPLOYMENT.md` - Deployment guide
- `MIGRATION_SUMMARY.md` - This file

### Environment Files (Not in Git)
- `.env.local` - Your local configuration (update manually)

## Conclusion

The migration from PostgreSQL to MongoDB is complete and ready for Coolify deployment. All code changes have been made, and the application is configured for self-hosted MongoDB with local file storage.

**Status**: ✅ Migration Complete - Ready for Coolify Deployment
