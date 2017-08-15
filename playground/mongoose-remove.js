const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//removes all matches (like find) = > Todo.remove()
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//self explanatory => Todo.findOneAndRemove ;does't return docs
//self explanatory => Todo.findByIdAndRemove ; returns the docs

Todo.findByIdAndRemove('59931fdd9e1787562f75ffb6').then((todo) => {
  console.log(todo);
});
