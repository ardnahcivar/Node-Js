var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Vehicles');
var connection = mongoose.connection;
connection.on('error',console.error.bind(console,'connection error'));

connection.once('open',function(){
  console.log('connected to db');
  connection.db.collection('bikes',function(err,collection){

    collection.find().toArray(function(err,data){
      console.log(data);
      /*var query = {name:"Mercedes",type:"A Class",color:"white"};
    collection.insert(query,{w:1},function(err,data){
      console.log('data is inserted'+data[0]);
    });
    */
    })

  });

/*
  connection.db.collection('bikes',function(err,collection){
    collection.insert({name:"Mercedes",type:"A Class",color:"White"});
    console.log('data inserted');
  })ardnahcivar
*/
connection.db.collection('bikes',function(err,collection){
  collection.deleteMany({name:"Mercedes"});
  console.log('data removed');
})


});
