const mongoose = require('mongoose');

const collateralSchema = new mongoose.Schema({
      c_description:{type:String},
      c_value:{type:Number,required:true},
})

const Collateral = mongoose.model('users',collateralSchema);

module.exports = Collateral;