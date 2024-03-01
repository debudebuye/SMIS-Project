const express = require('express');
const uuid = require('uuid');
 

const { PrismaClient } = require('@prisma/client');


const app = express();
const prisma = new PrismaClient();


const getreq = async (req, res) => {
     try {
       const Batch = await prisma.Batch.findMany(); 
       res.send(Batch);
     } catch (error) {
       console.error('Error fetching data:', error);
     } 
}

const addBatch = async (req, res) => {
    const { 
      batch_id,     
      batch_number,     
         
    } = req.body;
  
    try {
 
      const newData = await prisma.Batch.create({
         
        data: {
        // id:uuid(),
        batch_id,
        batch_number,
         
        }

      });
  
      res.json(newData);

    } catch (error) {

      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding data' });

    }
  } 

exports.getreq = getreq;
exports.addBatch = addBatch;