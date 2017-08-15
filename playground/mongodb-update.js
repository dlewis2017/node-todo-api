//const MongoClient = require('mongodb').MongoClient;
//object desctructuring - same as line above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error){
    //return error message and function stops to prevent the rest from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Update document to say you did eat lunch (set to true)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("598dd9e5697873504db7f1c3")
  // }, {
  //   $set: {
  //     completed:true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then ((results) => {
  //   console.log(results);
  // });

  //increment age by 1 and change name to Jen, 1st argument of findOneAndUpdate can take multiple changes 
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('598de08c916d4cff673b5211'),
  }, {
    $set: {
      name: 'Jen'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then ((results) => {
    console.log(results);
  });

  //db.close();
});
