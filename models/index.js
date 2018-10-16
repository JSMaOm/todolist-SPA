//here where we will connect to our mongo database
let mongoose = require('mongoose');
//tell us what's happening in any given point like when database failing and so on
mongoose.set('debug', true);

//this is just to allow us to use promise syntax rather than typing alot of syntaxes
mongoose.Promise = Promise;


/* const mongooseConnectionString = 'mongodb://localhost/todo_api?authSource=admin'; */
const mongooseConnectionString = 'mongodb://localhost/todo_api';

/* mongoose.connect(mongooseConnectionString, options); */
mongoose.connect(mongooseConnectionString);


module.exports.Todo = require('./todo');