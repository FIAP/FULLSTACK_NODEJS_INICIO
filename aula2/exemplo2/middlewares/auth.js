
module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    
    try {    
        if (token !== 'batman batman batman') {
            throw new Error('Invalid token');
        }
        next();
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
};
