-- Migration: Add Loyalty Wallet Model
-- Run this in Supabase SQL Editor

-- Step 1: Create LoyaltyReward table
CREATE TABLE IF NOT EXISTS "LoyaltyReward" (
  "id" TEXT PRIMARY KEY,
  "loyaltyAccountId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "amount" DOUBLE PRECISION NOT NULL,
  "expirationDate" TIMESTAMP(3),
  "rawId" TEXT UNIQUE NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Step 2: Add foreign key constraint
ALTER TABLE "LoyaltyReward" 
ADD CONSTRAINT "LoyaltyReward_loyaltyAccountId_fkey" 
FOREIGN KEY ("loyaltyAccountId") REFERENCES "LoyaltyAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Step 3: Remove old columns from LoyaltyAccount
ALTER TABLE "LoyaltyAccount" DROP COLUMN IF EXISTS "pointsBalance";
ALTER TABLE "LoyaltyAccount" DROP COLUMN IF EXISTS "rewardsBalance";

-- Step 4: Add new columns to LoyaltyAccount
ALTER TABLE "LoyaltyAccount" ADD COLUMN IF NOT EXISTS "totalBalance" DOUBLE PRECISION;
ALTER TABLE "LoyaltyAccount" ADD COLUMN IF NOT EXISTS "nextEligibleDate" TIMESTAMP(3);
ALTER TABLE "LoyaltyAccount" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Step 5: Create index on rawId for faster lookups
CREATE INDEX IF NOT EXISTS "LoyaltyReward_rawId_idx" ON "LoyaltyReward"("rawId");
CREATE INDEX IF NOT EXISTS "LoyaltyReward_loyaltyAccountId_idx" ON "LoyaltyReward"("loyaltyAccountId");
