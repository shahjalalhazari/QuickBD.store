/*
  Warnings:

  - You are about to drop the column `sttempts` on the `user_otps` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_otps" DROP COLUMN "sttempts",
ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0;
