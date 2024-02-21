// require('env').config();
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello SMIS project');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:3000/`);
});
