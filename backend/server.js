const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for handling CORS
app.use(cors());

app.post('/sum', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  console.log(num1);
  console.log(num2);

  const sum = num1 + num2;
  res.json({ sum });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
