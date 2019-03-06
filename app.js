const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const filmModel = require('./model/modelFilm.js');
const userModel = require('./model/modelUser.js')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/Films')
  .then(() => {
    console.log("Conexión con base de datos");
    //creacion del servidor
  });

app.use(bodyParser.json());

/* espera el modelo para crearlo en el body y acudo a j.son para que salga bonito y el objeto true para que el usuario reciba algo cuando crea. Se meten los datos desde postman. Ya se ha creado la base de datos */
app.post('/movies', async function (req, res) {
  await filmModel.create(req.body);
  return res.json({ ok: true });
});
//pide a la base de datos las peliculas//
app.get('/movies', async (req, res) => {
  const films = await filmModel.find();
  return res.send(films);
});
/* Get coge de la url la variable que hay detrás de los dos puntos. ESTE PUNTO NO FUNCIONA*/
app.get('/movies/top/:user', async (req, res)=> {
  const userFavs = await 
  res.send(req.params.user);
});
////////////CREA USUARIOS//////////////////////
app.post('/register', async (req, res) => {
  const newUser = new userModel(req.body);
  await newUser.save();
  return res.json({ ok: true });
});

////creación de usuario//
app.post('/login', async (req, res) => {
  const loginUser = await userModel.findOne({
    userName: req.body.userName,
    password: req.body.password
    /////lo que sigue es una proyección de mongoose para que me saque los dos siguientes campos
  }, 'email userName');
  return res.send(loginUser);
});

//////////////////QUIERO LAS PELIS DE UN USUARIO////////////////////////////////////
app.get('/user/:user/movies', async (req, res) => {
  const user = await filmModel.find({ userName: req.body.userName });
  console.log(user);
  res.send(user);
});
////Servidor escuchando
app.listen(3000, function () {
  console.log('Server is listening');
});


module.exports = app;