-- AlterTable
ALTER TABLE "DailySchedule" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "DailyScheduleItem" ALTER COLUMN "time" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "WeeklyPlan" ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "endDate" SET DEFAULT CURRENT_TIMESTAMP;