//const MongoClient = require('mongodb').MongoClient;
//object desctructuring - same as line above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error){
    //return error message and function stops to prevent the rest from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error){
  //     return console.log('Unable to insert todo', error);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'David',
    age: 22,
    location: 'Washington DC'
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert Users: ', error);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
