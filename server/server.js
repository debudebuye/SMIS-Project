require('dotenv').config();
const express = require('express');
const app = express();


const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello SMIS project');
});

app.listen(port, () => {
  console.log(`Server is running on port ${PORT} http://localhost:8000/`);
});
