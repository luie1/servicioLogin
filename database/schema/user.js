const mongoose=require('../connect');

const user={
    nombre:String,
    email:String,
    password:String,
    avatar:String,
    fono:String,
    comprador:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'comprador'
    },
    vendedor:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'vendedor'
    }
};

const usermodel=mongoose.model('user',user);

module.exports=usermodel;
