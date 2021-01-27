const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.send(`api working`);
    })

    // user
    app.post('/user', UserController.addUser);
    app.get('/users', UserController.getUserList);
    app.get('/user', UserController.getUserByEmail);
    app.get('/user/:id', UserController.getUser);
    app.put('/user/:id', UserController.editUser);
    app.delete('/user/:id', UserController.deleteUser);

    // cigar
    app.post('/user/:userId/cigar', UserController.addCigar);
    app.get('/user/:userId/cigar', UserController.getCigarList);
    app.delete('/user/:userId/cigar/:cigarId', UserController.deleteCigar);
}