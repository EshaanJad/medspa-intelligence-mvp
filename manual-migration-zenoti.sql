-- Manual migration for Appointment model update
-- Run this in Supabase SQL Editor

-- Step 1: Drop existing Appointment table (if it exists)
DROP TABLE IF EXISTS "Appointment" CASCADE;

-- Step 2: Create new comprehensive Appointment table
CREATE TABLE "Appointment" (
  "id" TEXT PRIMARY KEY,
  "guestId" TEXT NOT NULL,
  
  -- Core Identifiers
  "serviceName" TEXT NOT NULL,
  "appointmentDate" TIMESTAMP(3) NOT NULL,
  "status" TEXT,
  "invoiceNo" TEXT,
  "centerName" TEXT,
  
  -- Timing
  "bookedDate" TIMESTAMP(3),
  "startTime" TIMESTAMP(3),
  "endTime" TIMESTAMP(3),
  "duration" TEXT,
  "recoveryTime" TEXT,
  
  -- Staff & Location
  "provider" TEXT,
  "room" TEXT,
  "bookedBy" TEXT,
  
  -- Categorization
  "serviceCategory" TEXT,
  "appointmentCategory" TEXT,
  "bookingSource" TEXT,
  "rebookingSource" TEXT,
  
  -- Flags & Metadata
  "addOn" BOOLEAN,
  "rebooked" BOOLEAN,
  "genderSnapshot" TEXT,
  "notes" TEXT,
  
  -- Technical
  "rawId" TEXT UNIQUE NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Step 3: Add foreign key constraint
ALTER TABLE "Appointment" 
ADD CONSTRAINT "Appointment_guestId_fkey" 
FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Step 4: Create indexes for performance
CREATE INDEX IF NOT EXISTS "Appointment_guestId_idx" ON "Appointment"("guestId");
CREATE INDEX IF NOT EXISTS "Appointment_appointmentDate_idx" ON "Appointment"("appointmentDate");
CREATE INDEX IF NOT EXISTS "Appointment_rawId_idx" ON "Appointment"("rawId");
CREATE INDEX IF NOT EXISTS "Appointment_invoiceNo_idx" ON "Appointment"("invoiceNo");
