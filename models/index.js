//here where we will connect to our mongo database
let mongoose = require('mongoose');
//tell us what's happening in any given point like when database failing and so on
mongoose.set('debug', true);

//this is just to allow us to use promise syntax rather than typing alot of syntaxes
mongoose.Promise = Promise;



const options = {
  user: "maom",
  pass: "hgHlgtdrgfd.3",
  useMongoClient: true
};

const mongooseConnectionString = 'mongodb://localhost/todo_api?authSource=admin';

mongoose.connect(mongooseConnectionString, options);


module.exports.Todo = require('./todo');