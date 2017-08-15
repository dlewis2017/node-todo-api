var mongoose = require('mongoose');

//Todo model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// //Challenge - new todo and save
// var sendLetterTodo = new Todo({
//   text: 'Send letter from postoffice',
//   completed: true,
//   completedAt: 5
// });
//
// sendLetterTodo.save().then((doc) => {
//   console.log('Saved todo ', doc);
// }, (error) => {
//   console.log('Unable to save todo item')
// });


module.exports = {Todo};
