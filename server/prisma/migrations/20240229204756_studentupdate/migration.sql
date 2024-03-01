-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_batch_id_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_department_id_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "birth_date" DROP NOT NULL,
ALTER COLUMN "department_id" DROP NOT NULL,
ALTER COLUMN "program_type" DROP NOT NULL,
ALTER COLUMN "addmission_date" DROP NOT NULL,
ALTER COLUMN "batch_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("batch_id") ON DELETE SET NULL ON UPDATE CASCADE;
