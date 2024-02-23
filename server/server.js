<<<<<<< HEAD
=======
// require('env').config();
>>>>>>> 2dddf466c25ae135e22c8e1b4398370d9c53724b
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello SMIS project');
});

<<<<<<< HEAD
app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:3001/`);
=======
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:3000/`);
>>>>>>> 2dddf466c25ae135e22c8e1b4398370d9c53724b
});
