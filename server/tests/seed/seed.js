const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'david@example.com',
  password: 'user1pass',
  tokens: [{
    access: 'auth',
    token:jwt.sign({_id: userOneId, access:'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'john@example.com',
  password: 'user2pass',
  tokens: [{
    access: 'auth',
    token:jwt.sign({_id: userTwoId, access:'auth'}, process.env.JWT_SECRET).toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 222,
  _creator: userTwoId
}];

//automatically run code before test case; in this case, make sure database is empty
const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  //wipe db
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    //wait until user one and two successfully saved
    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

//exports
module.exports = {todos,populateTodos,users, populateUsers};
