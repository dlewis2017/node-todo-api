var mongoose = require('mongoose');

//Challenge - Create User Model
var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 1
  }
});

// var user = new User({
//   email: 'dlewis12@exmaple.com      '
// });
//
// user.save().then((doc) => {
//   console.log('');
// }, (error) => {
//   console.log(error);
// });

module.exports = {User};
