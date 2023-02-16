const mongoose = require('mongoose');
const express = require('express');
const PORT = 3030;
const app = express(); // La variable "App" se renombra a "app" en minúsculas

mongoose.set('strictQuery', false);

const moviesRoutes = require('./routes/moviesRoutes'); // Se define la variable "moviesRoutes"

app.use(express.json());

const URL = 'mongodb+srv://lauracelis29:Lucky2021...@cluster0.zvfnon6.mongodb.net/test?retryWrites=true&w=majority'; // Se agrega el nombre de la base de datos a la URL

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));

app.use('/', moviesRoutes); // Se usa la variable "moviesRoutes" en lugar de '/routes'

app.listen(PORT, () => {
  console.log('El servidor está escuchando en el puerto ' + PORT);
})