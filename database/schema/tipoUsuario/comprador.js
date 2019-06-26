const mongoose=require('../../connect');

const comprador={
    calificacion:Number
};

const compradormodel=mongoose.model('comprador',comprador);

module.exports=compradormodel;
