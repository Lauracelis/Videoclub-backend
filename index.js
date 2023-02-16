// Import required modules
const mongoose = require('mongoose');
const express = require('express');
// Set up the port number for the server
const PORT = 3030;
// Create an instance of the Express app
const app = express(); 
// Disable strict query mode in Mongoose
mongoose.set('strictQuery', false);
// Import the movie routes
const moviesRoutes = require('./routes/moviesRoutes'); 
// Enable JSON parsing for incoming request bodies
app.use(express.json());
// Set up the MongoDB connection URL and connect to the database
const URL = 'mongodb+srv://lauracelis29:Lucky2021...@cluster0.zvfnon6.mongodb.net/test?retryWrites=true&w=majority'; 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));
// Set up the movie routes for the app
app.use('/', moviesRoutes); 
// Start the server
app.listen(PORT, () => {
  console.log('El servidor está escuchando en el puerto ' + PORT);
})