const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const dbConnection =async ()=>{
    try {
      await prisma.$connect();
      console.log("database connected");
    } catch (error) {
      console.log("database connection error ",error);
    }
    // finally{
    //   await prisma.$connect();
    //   console.log("database disconnected");
    // }
  }

  module.exports = dbConnection;