const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware logger
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/users', (req, res) => {
  res.status(201).send('User Created');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
