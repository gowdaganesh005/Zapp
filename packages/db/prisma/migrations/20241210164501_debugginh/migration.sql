/*
  Warnings:

  - Added the required column `token` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "token" TEXT NOT NULL;
