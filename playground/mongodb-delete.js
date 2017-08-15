//const MongoClient = require('mongodb').MongoClient;
//object desctructuring - same as line above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error){
    //return error message and function stops to prevent the rest from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //find and delete one
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //challenge - remove duplicates (delete many) and then find one and delete by ID
  // db.collection('Users').deleteMany({name: 'David'}).then((result) => {
  //   console.log(JSON.stringify(result,undefined,2));
  // });
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('598daddb3907891ed42e41e6')}).then((result) => {
  //   console.log(JSON.stringify(result,undefined,2));
  // });
  db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
     console.log(JSON.stringify(result,undefined,2));
   });

  //db.close();
});
