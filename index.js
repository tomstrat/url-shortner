const express = require('express');
require("./mongo/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.listen(PORT);