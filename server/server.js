const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello SMIS project');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:3001/`);
});
