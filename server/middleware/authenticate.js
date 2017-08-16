var {User} = require('./../models/user');

//middle-ware
var authenticate = (req,res,next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    //modify request object
    req.user = user;
    req.token = token;
    next();
  }).catch((error) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
