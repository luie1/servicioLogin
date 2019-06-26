const mongoose=require('../connect');

const cita={
    lat:String,
    lon:String,
    vendedor:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'vendedor'
    },
    comprador:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'comprador'
    }
};

const citamodel=mongoose.model('cita',cita);

module.exports=citamodel;
