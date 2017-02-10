
var path = require('path')
var User = require(path.join(__dirname,'models/model.js'))

var snow =  new User({
  name:"Jon Sndsdsdow",
  username:"knows ndsdsothing",
  password:"knows everydsdsthing"
});

snow.save(function(err){
  if(err){
      throw err;
  }
  else{
    console.log('inserted successfully');

  }
})
