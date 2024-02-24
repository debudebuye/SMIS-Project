require('dotenv').config();

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bodyParser = require('body-parser');

const studRoute = require('./controllers/addStudent');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT ;

app.use('/',studRoute);



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

dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}/`);
});


