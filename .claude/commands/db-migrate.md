---
description: Manage database migrations for the REmail application
argument-hint: [create|deploy|reset|status] [name]
allowed-tools: Bash(npx prisma:*), Read, Edit
---

# Database Migration

Manage database migrations for the REmail application.

## Arguments
- `$ARGUMENTS`: Operation and optional migration name (e.g., "create add_campaign_status", "deploy", "status")

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

### Regenerate Prisma Client
```bash
npx prisma generate
```

## Instructions

### Before Creating a Migration

1. Review schema changes in `prisma/schema.prisma`
2. Consider data implications (will existing data be lost?)
3. Plan for backward compatibility if needed

### Migration Naming Conventions

- Use snake_case
- Be descriptive: `add_campaign_status_field`
- Include table name if relevant: `users_add_subscription_tier`

**Examples:**
- `add_campaign_table`
- `users_add_email_verified`
- `campaigns_add_scheduled_at`
- `drop_legacy_fields`

### After Migration

1. Run `npx prisma generate` to update the client
2. Update seed file if needed: `prisma/seed.ts`
3. Test affected API routes

### Production Considerations

- Always backup before migrating
- Test migrations on staging first
- Plan for zero-downtime where possible
- Use `migrate deploy` (not `migrate dev`) in production

## Common Schema Patterns

### Campaign Model
```prisma
model Campaign {
  id          String   @id @default(cuid())
  userId      String
  name        String
  status      CampaignStatus @default(DRAFT)
  templateId  String?
  sentCount   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  scheduledAt DateTime?
}
```

### MailList Model
```prisma
model MailList {
  id          String   @id @default(cuid())
  userId      String
  name        String
  recordCount Int      @default(0)
  source      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Reference

- Schema file: `prisma/schema.prisma`
- Seed file: `prisma/seed.ts`
- Prisma docs: https://www.prisma.io/docs/concepts/components/prisma-migrate
