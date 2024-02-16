-- CreateTable
CREATE TABLE "Student" (
    "student_id" VARCHAR(10) NOT NULL,
    "user_name" VARCHAR(10) NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "middle_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" VARCHAR(6) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "department_id" TEXT NOT NULL,
    "program_type" VARCHAR(10) NOT NULL,
    "addmission_date" TIMESTAMP(3) NOT NULL,
    "password" VARCHAR(15) NOT NULL,
    "batch_id" TEXT NOT NULL,
    "picture" BYTEA,
    "section" VARCHAR(1) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "Lecture" (
    "lecture_id" VARCHAR(10) NOT NULL,
    "user_name" VARCHAR(10) NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "middle_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" VARCHAR(6) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "department_id" TEXT NOT NULL,
    "employment_date" TIMESTAMP(3) NOT NULL,
    "qualifications" VARCHAR(50) NOT NULL,
    "picture" BYTEA,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("lecture_id")
);

-- CreateTable
CREATE TABLE "LectureDepartment" (
    "lecture_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,

    CONSTRAINT "LectureDepartment_pkey" PRIMARY KEY ("lecture_id","department_id")
);

-- CreateTable
CREATE TABLE "CourseLecture" (
    "course_id" TEXT NOT NULL,
    "lecture_id" TEXT NOT NULL,

    CONSTRAINT "CourseLecture_pkey" PRIMARY KEY ("course_id","lecture_id")
);

-- CreateTable
CREATE TABLE "Course" (
    "course_id" VARCHAR(15) NOT NULL,
    "course_name" VARCHAR(15) NOT NULL,
    "course_code" VARCHAR(15) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "CourseDepartment" (
    "course_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,

    CONSTRAINT "CourseDepartment_pkey" PRIMARY KEY ("course_id","department_id")
);

-- CreateTable
CREATE TABLE "Department" (
    "department_id" VARCHAR(10) NOT NULL,
    "department_name" TEXT NOT NULL,
    "head_id" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "DepartmentHead" (
    "head_id" VARCHAR(10) NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "middle_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" VARCHAR(6) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "employment_date" TIMESTAMP(3) NOT NULL,
    "qualifications" VARCHAR(50) NOT NULL,
    "picture" BYTEA,

    CONSTRAINT "DepartmentHead_pkey" PRIMARY KEY ("head_id")
);

-- CreateTable
CREATE TABLE "Batch" (
    "batch_id" VARCHAR(10) NOT NULL,
    "batch_number" INTEGER NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("batch_id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("batch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LectureDepartment" ADD CONSTRAINT "LectureDepartment_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("lecture_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseLecture" ADD CONSTRAINT "CourseLecture_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("lecture_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDepartment" ADD CONSTRAINT "CourseDepartment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDepartment" ADD CONSTRAINT "CourseDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;
