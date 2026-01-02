# Database Migration

Manage database migrations for the REmail application.

## Common Operations

### Create New Migration
```bash
npx prisma migrate dev --name <migration_name>
```

### Apply Pending Migrations
```bash
npx prisma migrate deploy
```

### Reset Database (Development Only)
```bash
npx prisma migrate reset
```

### View Migration Status
```bash
npx prisma migrate status
```

## Instructions

1. Before creating a migration:
   - Review the schema changes in `prisma/schema.prisma`
   - Consider data implications (will existing data be lost?)
   - Plan for backward compatibility if needed

2. Migration naming conventions:
   - Use snake_case
   - Be descriptive: `add_campaign_status_field`
   - Include table name if relevant: `users_add_subscription_tier`

3. After migration:
   - Run `npx prisma generate` to update the client
   - Update seed file if needed
   - Test affected API routes

4. Production considerations:
   - Always backup before migrating
   - Test migrations on staging first
   - Plan for zero-downtime where possible

## Common Schema Patterns

### Campaign Model
- id, userId, name, status, templateId
- mailPieces, sentCount, responseCount
- createdAt, updatedAt, scheduledAt

### MailList Model
- id, userId, name, recordCount
- source, lastUpdated
- propertyTypes, geographic filters

### Template Model
- id, userId, name, type (postcard/letter)
- frontDesign, backDesign
- isPublic, category
