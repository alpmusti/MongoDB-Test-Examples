const assert = require('assert');
const MarioChar = require('../models/MarioChar');
//Describe test
describe('Updating records', function(){
  var char;

  beforeEach(function(done){
    char = new MarioChar({
      name : 'Mario',
      weight : 50
    });
    char.save().then(function(){
      //assert(char.isNew === false);
      done();
    });
  });
  //Create tests
   it('Update one record from the database' , function(done){
     MarioChar.findOneAndUpdate({name : 'Mario'} , {name : "Luigi"}).then(function(){
       MarioChar.findOne({_id : char._id}).then(function(result){
         assert(result.name === 'Luigi')
         done();
       });
     });
   });

   it('Increments the weight by 1' , function(done){
     MarioChar.update({} , {$inc: {weight : 1}}).then(function(){
       MarioChar.findOne({name : 'Mario'}).then(function(result){
         assert(result.weight === 51);
         done();
       });
     });
   });
});
