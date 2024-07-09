
const express = require('express');
const app = express();
const stockRoutes = require('./routes/stocks');
const authMiddleware = require('./middlewares/auth');
const PORT = process.env.PORT || 3030;

app.set('view engine', 'ejs');

app.use(express.json());

app.use(authMiddleware); 
app.use('/', stockRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
