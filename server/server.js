const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// const studRoute = require('./controllers/addStudent');
const studRoute = require('./routes/student');
const batchRoute = require('./routes/batch');
const dbConnection = require('./config/db.config');
// const passport = require('./middleware/auth')

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require('dotenv').config();
const port = process.env.PORT ;


app.use('/student',studRoute);
app.use('/batch',batchRoute);

dbConnection();


app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}/`);
});


