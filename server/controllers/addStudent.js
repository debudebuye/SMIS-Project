const exp = require('express');
const router = exp.Router();
const { PrismaClient } = require('@prisma/client');


const app = exp();
const prisma = new PrismaClient();


router.get('/', async (req, res) => {
     res.send('adding students to student table')
});

router.post('/addData', async (req, res) => {
    const { 
      student_id,     
      user_name,     
      first_name,    
      middle_name,   
      last_name,  
      gender, 
      birth_date,
      department_id,
      program_type,
      addmission_date,
      password,
      batch_id,
      picture,
      section         } = req.body;
  
    try {
      const newData = await prisma.data.create({
        data: {
          student_id,     
          user_name,     
          first_name,    
          middle_name,   
          last_name,  
          gender, 
          birth_date,
          department_id,
          program_type,
          addmission_date,
          password,
          batch_id,
          picture,
          section  
      },
      });
  
      res.json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding data' });
    }
  });


module.exports = router;