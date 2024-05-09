/*
  Warnings:

  - Added the required column `bookingSessionId` to the `MpesaTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MpesaTransaction" ADD COLUMN     "bookingSessionId" TEXT NOT NULL;
