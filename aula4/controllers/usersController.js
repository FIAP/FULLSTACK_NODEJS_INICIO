const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('editUser', { user });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const user = new User({ name, email, age });
        await user.save();
        res.redirect('/users');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        await User.findByIdAndUpdate(req.params.id, { name, email, age });
        res.redirect('/users');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.redirect('/users');
    } catch (err) {
        res.status(500).send(err);
    }
};
