const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers);
router.get('/new', (req, res) => res.render('newUser'));
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.post('/:id', usersController.updateUser);
router.post('/:id/delete', usersController.deleteUser);

module.exports = router;
