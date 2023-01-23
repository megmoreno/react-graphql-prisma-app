-- CreateTable
CREATE TABLE "WeeklyPlan" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "resourcesNeeded" TEXT[],
    "activities" TEXT[],

    CONSTRAINT "WeeklyPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "weeklyPlanId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailySchedule" (
    "id" SERIAL NOT NULL,
    "weeklyPlanId" INTEGER NOT NULL,

    CONSTRAINT "DailySchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyScheduleItem" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "planDescription" TEXT NOT NULL,
    "dailyScheduleId" INTEGER NOT NULL,

    CONSTRAINT "DailyScheduleItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_weeklyPlanId_fkey" FOREIGN KEY ("weeklyPlanId") REFERENCES "WeeklyPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailySchedule" ADD CONSTRAINT "DailySchedule_weeklyPlanId_fkey" FOREIGN KEY ("weeklyPlanId") REFERENCES "WeeklyPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyScheduleItem" ADD CONSTRAINT "DailyScheduleItem_dailyScheduleId_fkey" FOREIGN KEY ("dailyScheduleId") REFERENCES "DailySchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
