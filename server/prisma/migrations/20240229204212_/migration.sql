/*
  Warnings:

  - Made the column `department_id` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `program_type` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addmission_date` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `batch_id` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `section` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "department_id" SET NOT NULL,
ALTER COLUMN "program_type" SET NOT NULL,
ALTER COLUMN "addmission_date" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "batch_id" SET NOT NULL,
ALTER COLUMN "section" SET NOT NULL;
