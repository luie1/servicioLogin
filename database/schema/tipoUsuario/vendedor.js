const mongoose=require('../../connect');

const vendedor={
    calificacion:Number,
    /*producto:[
      mongoose.Schema.Types.ObjectId
    ]*/
};

const vendedormodel=mongoose.model();

module.exports=vendedormodel;
