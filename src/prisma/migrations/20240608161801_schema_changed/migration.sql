/*
  Warnings:

  - The primary key for the `Tweet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Tweet` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `content` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_userId_fkey";

-- DropIndex
DROP INDEX "Tweet_userId_idx";

-- AlterTable
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_pkey",
DROP COLUMN "data",
DROP COLUMN "deleted",
ADD COLUMN     "comment" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tweet_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "password",
ADD COLUMN     "dateJoined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
