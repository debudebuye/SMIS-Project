const express = require('express');
const { PrismaClient } = require('@prisma/client');


const app = express();
const prisma = new PrismaClient();

 
app.use(express.json());

// Routes for CRUD operations

// Create operation
app.post('/addstudent', async (req, res) => {

    const { name, email } = req.body;
    const newUser = await prisma.Student.create({
        data: {
            user_name,  
            student_id,
            first_name ,
            middle_name,
            last_name , 
        },
    });
    res.json(newUser);
});

// Read operation
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// // Update operation
// app.put('/users/:id', async (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { name, email } = req.body;
//     const updatedUser = await prisma.user.update({
//         where: {
//             id: userId,
//         },
//         data: {
//             name,
//             email,
//         },
//     });
//     res.json(updatedUser);
// });

// // Delete operation
// app.delete('/users/:id', async (req, res) => {
//     const userId = parseInt(req.params.id);
//     await prisma.user.delete({
//         where: {
//             id: userId,
//         },
//     });
//     res.json({ message: 'User deleted successfully' });
// });
