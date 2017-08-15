//requires
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
//custom requires
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
//local host or Heroku
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

/* post new todo */
app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  //save todo and send
  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

/* get all todos */
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    //use object instead of array to potentially allow other items to be sent
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

/* Get specific id */
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send({});
  }
  Todo.findById(id).then((todo) => {
    //might not return todo so check if it exists
    if(!todo){
      return res.status(404).send({});
    }
    res.send({todo});
  }).catch((error) => {
      res.status(400).send();
  });
});



/* port */
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
