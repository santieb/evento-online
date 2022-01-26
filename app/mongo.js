
let mongoose = require("./config/conexion");
const userSchema = require('./usuarios.model');

const schema = new mongoose.Schema({ nombre: String, apellido: String, edad: Number });

const User = mongoose.model('users', userSchema);



module.exports = {User};