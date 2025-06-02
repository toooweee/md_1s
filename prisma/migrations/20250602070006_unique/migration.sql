/*
  Warnings:

  - You are about to drop the column `price` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `characteristics` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `product_variants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_variants" ADD COLUMN     "price" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "price";

-- CreateIndex
CREATE UNIQUE INDEX "characteristics_name_key" ON "characteristics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
