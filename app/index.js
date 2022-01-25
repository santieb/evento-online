
const express = require('express');
const app = express();
const port = 3000;

let mongoose = require("./config/conexion");

const schema = new mongoose.Schema({ hola: String});
const HelloWorld = mongoose.model("tabla", schema);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Aplicación escuchando en puerto: ${port}`)
});

