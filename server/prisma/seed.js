const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTableIfNotExists(tableName, tableCreationSql) {
  const tableExists = await prisma.$executeRaw`SELECT to_regclass('public."${tableName}"') IS NOT NULL as exists;`;

  if (!tableExists.exists) {
    try {
      // Use Prisma's $executeRaw with parameters directly
      await prisma.$executeRaw(tableCreationSql);
      console.log(`Table ${tableName} created successfully.`);
    } catch (error) {
      console.error(`Error creating table ${tableName}:`, error);
    }
  } else {
    console.log(`Table ${tableName} already exists.`);
  }
}

  
async function createTables() {
  try {
    await prisma.$connect();

    // Automatically create tables based on Prisma schema
    await createTableIfNotExists(
      'Student',
      `CREATE TABLE IF NOT EXISTS "Student" (
        "student_id" VARCHAR(10) NOT NULL,
        "user_name" VARCHAR(10) NOT NULL,
        "first_name" VARCHAR(15) NOT NULL,
        "middle_name" VARCHAR(15) NOT NULL,
        "last_name" VARCHAR(15) NOT NULL,
        "gender" VARCHAR(6) NOT NULL,
        "birth_date" TIMESTAMP(3) NOT NULL,
        "department_id" TEXT NOT NULL,
        "program_type" VARCHAR(10) NOT NULL,
        "admission_date" TIMESTAMP(3) NOT NULL,
        "password" VARCHAR(15) NOT NULL,
        "batch_id" TEXT NOT NULL,
        "picture" BYTEA,
        "section" VARCHAR(1) NOT NULL,
        CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id"),
        CONSTRAINT "Student_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT "Student_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("batch_id") ON DELETE RESTRICT ON UPDATE CASCADE
      );`
    );

    await createTableIfNotExists(
      'Lecture',
      `CREATE TABLE IF NOT EXISTS "Lecture" (
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
        CONSTRAINT "Lecture_pkey" PRIMARY KEY ("lecture_id"),
        CONSTRAINT "Lecture_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE
      );`
    );

    await createTableIfNotExists(
        'LectureDepartment',
        `CREATE TABLE IF NOT EXISTS "LectureDepartment" (
          "lecture_id" TEXT NOT NULL,
          "department_id" TEXT NOT NULL,
          CONSTRAINT "LectureDepartment_pkey" PRIMARY KEY ("lecture_id","department_id"),
          CONSTRAINT "LectureDepartment_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("lecture_id") ON DELETE RESTRICT ON UPDATE CASCADE
        );`
      );

    await createTableIfNotExists(
        'CourseLecture',
        `CREATE TABLE IF NOT EXISTS "CourseLecture" (
          "course_id" TEXT NOT NULL,
          "lecture_id" TEXT NOT NULL,
          CONSTRAINT "CourseLecture_pkey" PRIMARY KEY ("course_id","lecture_id"),
          CONSTRAINT "CourseLecture_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("lecture_id") ON DELETE RESTRICT ON UPDATE CASCADE
        );`
      );
  
   await createTableIfNotExists(
        'Course',
        `CREATE TABLE IF NOT EXISTS "Course" (
          "course_id" VARCHAR(15) NOT NULL,
          "course_name" VARCHAR(15) NOT NULL,
          "course_code" VARCHAR(15) NOT NULL,
          CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
        );`
      );

  await createTableIfNotExists(
        'CourseDepartment',
        `CREATE TABLE IF NOT EXISTS "CourseDepartment" (
          "course_id" TEXT NOT NULL,
          "department_id" TEXT NOT NULL,
          CONSTRAINT "CourseDepartment_pkey" PRIMARY KEY ("course_id","department_id"),
          CONSTRAINT "CourseDepartment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE,
          CONSTRAINT "CourseDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE
        );`
      );

    await createTableIfNotExists(
      'Department',
      `CREATE TABLE IF NOT EXISTS "Department" (
        "department_id" VARCHAR(10) NOT NULL,
        "department_name" TEXT NOT NULL,
        "head_id" TEXT NOT NULL,
        CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
      );`
    );
   
    
      await createTableIfNotExists(
        'DepartmentHead',
        `CREATE TABLE IF NOT EXISTS "DepartmentHead" (
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
        );`
      );
  
      await createTableIfNotExists(
        'Batch',
        `CREATE TABLE IF NOT EXISTS "Batch" (
          "batch_id" VARCHAR(10) NOT NULL,
          "batch_number" INTEGER NOT NULL,
          CONSTRAINT "Batch_pkey" PRIMARY KEY ("batch_id")
        );`
      );
     

    console.log('All tables created successfully.');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTables();
