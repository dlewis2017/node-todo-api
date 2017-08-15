const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '5991be0ec8d27a073076213911';

// //validate ID before querying
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// //query for all todos
// Todo.find({
//   //No need for new ObjectID because mongoose does it
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// //returns one item as document, not array
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// //same as above but with ID
// Todo.findById(id).then((todo) => {
//   //still returns success even if id not found
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by Id: ', todo);
// }).catch( (error) => console.log(error));

User.findById('598dee547e37347e52b10541').then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch( (error) => console.log(error) );
