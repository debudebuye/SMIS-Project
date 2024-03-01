const express = require('express');
// const uuid = require('uuid/v4');

const batch = require('../controllers/batch');

const rout = express.Router();


rout.get("/view",batch.getreq);
rout.post("/addBatch",batch.addBatch);




module.exports = rout;