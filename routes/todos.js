let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/todos');

//this will lead me directly to index.js in models folder
let db = require('../models');


//the first parameter this '/' is the first parameter in the 
//app.js files when I use app.use('/api/todos/', todoRoutes)
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;