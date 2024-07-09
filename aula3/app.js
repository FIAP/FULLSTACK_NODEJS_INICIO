const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
