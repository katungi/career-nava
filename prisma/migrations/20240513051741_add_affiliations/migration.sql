/*
  Warnings:

  - You are about to drop the `UserDocuments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserDocuments" DROP CONSTRAINT "UserDocuments_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Bio" TEXT,
ADD COLUMN     "scholarshipAffiliations" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "UserDocuments";
