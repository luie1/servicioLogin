const mongoose=require('../../connect');

const producto={
    precio:Number,
    tipo:String,
    catidaddisponible:Number,
    vendedor:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'vendedor'
    },
    imagen:[
      mongoose.Schema.Types.ObjectId
    ]
};

const promodel=mongoose.model('producto',producto);

module.exports=promodel;
