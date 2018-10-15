let express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser'),
    todoRoutes = require('./routes/todos');


//those two lines will allow us to access the request body
//that comes in a put or post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.sendfile('style-mini.css');
  res.sendFile('index.html');
});

//the first parameter is to set the prefix for all our Routes paths
app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log(`APP IS RUNNING ON PORT ${port}`);  
});

