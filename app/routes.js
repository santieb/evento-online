const express = require('express');
const db = require('./mongo');
const middle = require('./middleware');
const router = express.Router();

router.get('/', (req, res) => {
    middle.logger('log', 'Api Testeada!!!')
    res.send('FUNCIONA!!!!')
})

router.get('/usuarios', async (req, res) => {
    middle.logger('log', 'Mostrando Usuarios...')
    let users = await db.User.find();
    res.json(users);
})

router.post('/usuarios', async (req, res) => {
/*    req.body.username = "gsobol";
    req.body.name = "Gustavo Sobol";
    req.body.email = "gsobol@correo.com";
    req.body.password = "123456";
 */ 
    const user = await middle.newUser(req);
    middle.logger('log', `El usuario ${user.name} ha sido creado.`)
    res.json({ msj: `Usuario ${user.name} creado.` });
})

router.delete('/usuarios', async (req, res) => {
    middle.logger('log', 'Usuarios eliminados...')
    await db.User.deleteMany({});
    res.json({ msj: 'Usuarios eliminados' });
})

router.delete('/usuarios/:name', async (req, res) => {
    let usuario = await db.User.findOne({ name: req.params.name });
    await db.User.deleteOne({ _id: usuario._id });
    middle.logger('log', `Usuario ${usuario.name} eliminado`)
    res.json({ msj: `Usuario ${usuario.name} eliminado` });
})

module.exports = router;