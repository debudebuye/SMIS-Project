const express = require('express');

const student = require('../controllers/student');
const studentlogin = require('../middleware/studauth');


const route = express.Router();


route.get("/view",student.getreq);
route.post("/addStud",student.addStudent);
route.post("/login",studentlogin.studlogin)



module.exports = route;