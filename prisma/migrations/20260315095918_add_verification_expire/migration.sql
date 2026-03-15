-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationExpires" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "user_otps" ADD CONSTRAINT "user_otps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
