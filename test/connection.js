const mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before(function(done){
  //Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made.');
    done();
  }).on('error' , function(err){
    console.log('Connection error : ' , error);
  });
});
//drop the characters from collection before each test
beforeEach(function(done){
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
  done();
  });
});
