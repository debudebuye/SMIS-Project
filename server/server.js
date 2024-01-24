const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello Worlds');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:8000/ ${PORT}`);
});
