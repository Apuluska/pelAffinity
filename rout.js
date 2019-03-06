const mongoose = require('mongoose');
const filmModel = require('./model/modelFilm.js/index.js');
const app = require('./app');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Films')
    .then(() => {
        console.log("Conexión con base de datos");
        //creacion del servidor
    });








