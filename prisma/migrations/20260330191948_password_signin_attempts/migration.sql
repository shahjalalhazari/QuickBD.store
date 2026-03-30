-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordAddpempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "passwordLockUntil" TIMESTAMP(3);
