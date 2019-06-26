const mongoose=require('../../connect');

const imagen={
    url:String
};

const imagenmodel=mongoose.model('imagen',imagen);

module.exports=imagenmodel;
