//const MongoClient = require('mongodb').MongoClient;
//object desctructuring - same as line above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error){
    //return error message and function stops to prevent the rest from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("598cb830cf263f0705036a94")
  // }).toArray().then((docs) => {
  //   console.log('Todos');;
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (error) => {
  //   console.log('Unable to fetch todos ', error);
  // });
  //query for number of todos in
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos ', error);
  // });
  //query for names matching given names
  db.collection('Users').find({name: 'David'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (error) => {
    console.log('Unable to fetch todos ', error);
  });


  //db.close();
});
