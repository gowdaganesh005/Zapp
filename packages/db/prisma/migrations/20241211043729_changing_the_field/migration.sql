-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_recieverId_fkey";

-- AlterTable
ALTER TABLE "Transactions" ALTER COLUMN "recieverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "User"("userid") ON DELETE SET NULL ON UPDATE CASCADE;
