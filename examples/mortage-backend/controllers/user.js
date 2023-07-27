const User = require('../models/userSchema');

exports.createUser=(async(req,res)=>{
    try{
      const {firstName,secondName,email,password,role} = req.body
      const newUser= await User.create({
        firstName,
        secondName,
        email,
        password,
        role,
        createDate:new Date()
      })
      res.status(201).json({
        status:'success',
        data:{
            user:newUser
        }
      })
    }catch(err){
       res.status(400).json({
        status:'error',
        message:'failed to create user.'
       })
    }
});