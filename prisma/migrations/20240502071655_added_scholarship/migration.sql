-- CreateTable
CREATE TABLE "Scholarship" (
    "id" SERIAL NOT NULL,
    "scholarshipName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "openingDates" TEXT,
    "deadline" TEXT,
    "courseOfStudyInformation" TEXT,
    "link" TEXT,

    CONSTRAINT "Scholarship_pkey" PRIMARY KEY ("id")
);
