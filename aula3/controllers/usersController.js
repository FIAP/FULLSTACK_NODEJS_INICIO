let users = []; 

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};

exports.createUser = (req, res) => {
    const { id, name, email } = req.body;
    const user = { id, name, email };
    users.push(user);
    res.status(201).json(user);
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find(u => u.id === id);
    if (user) {
        user.name = name;
        user.email = email;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
};
