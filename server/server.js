//requires
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
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
    return res.status(404).send({});
  }
  Todo.findById(id).then((todo) => {
    //might not return todo so check if it exists
    if(!todo){
      return res.status(404).send({});
    }
    res.send({todo});
  }).catch((error) => {
      res.status(400).send({});
  });
});

/* Delete Todo By Id*/
app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send({});
    }
    res.send({todo});
  }).catch((error) => {
    res.status(400).send({});
  });
});

/* Update todo items */
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  //take object and pull off piece of body
  var body = _.pick(req.body, ['text','completed']);

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  //update completed At
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  //"new" similar to "return original" options"; update actually todo in DB
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo){
      return res.status(404).send();
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
