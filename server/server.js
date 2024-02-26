const express = require('express');
const bodyParser = require('body-parser');

const studRoute = require('./controllers/addStudent');
const dbConnection = require('./config/db.config');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();
const port = process.env.PORT ;

app.use('/',studRoute);




dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}/`);
});


