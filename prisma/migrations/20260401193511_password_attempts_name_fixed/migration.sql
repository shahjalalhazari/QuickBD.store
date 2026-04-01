/*
  Warnings:

  - You are about to drop the column `passwordAddpempts` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordAddpempts",
ADD COLUMN     "passwordAttempts" INTEGER NOT NULL DEFAULT 0;
