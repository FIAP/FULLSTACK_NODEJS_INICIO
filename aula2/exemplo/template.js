const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
