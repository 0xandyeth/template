const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstName:{type:String,required:true},
   secondName:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true},
   role:{type:String,required:true},
   createDate:{type:Date}

})

const User = mongoose.model('users',userSchema);

module.exports = User;