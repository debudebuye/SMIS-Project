const {PrismaClient} =  require('@prisma/client');
const express = require('express');



const prisma = new PrismaClient();
const app = express();

const studlogin = async(req,res)=>{
    const {user_name,password} =req.body;

    const user = await prisma.student.findFirst({
        where:{
            user_name,
            password
        }
    });

    if(user){
        res.status(200).json({message:'login successful'})
    }
    else{
        res.status(401).json({message:'invalid credentials'})

    }
}


exports.studlogin = studlogin;