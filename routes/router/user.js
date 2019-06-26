const User=require('../../database/schema/user');
const express=require('express');
const router=express.Router();
const sha1=require('sha1');
const jwt=require('jsonwebtoken');
const authorization=require('./middleware/auth');

router.get('/',(req,res)=>{
    User.find().exec((err,docs)=>{
        if(docs.length>0){
          res.status(200).json(docs);
        }else{
          res.status(200).json({
            message:'no existen usuarios en la bd'
          });
        }
    });
});

router.post('/',async(req,res)=>{
    let datos=req.body;
    datos['password']=sha1(datos['password']);
    let ins=new User(datos);
    let result=await ins.save();
    res.status(200).json(result);
});

router.post('/login',(req,res)=>{
    User.find({
      email:req.body['email']
    }).exec().then(doc=>{
      if(doc.length>0){
        let us=doc[0];
        if(us['password']==sha1(req.body['password'])){
          const token=jwt.sign({
                    email:us.email
                  },process.env.JWT_KEY||'miClave',{
                    expiresIn:"2h"
                  });
          res.status(200).json({
            message:token,
            permiso:'si'
          });
        }else{
          console.log("password");
          res.json({
            message:'password incorrecto',
            permiso:'no'
          });
        }
      }else{
        console.log("email");
        res.json({
          message:'email no existe',
          permiso:'no'
        });
      }
    }).catch(err=>{
      res.status(500).json({
        message:err
      });
    });
});

router.post('/logingoogle',(req,res)=>{
    const token=jwt.sign({
              email:req.body.email
            },process.env.JWT_KEY||'miClave',{
              expiresIn:"2h"
            });
    res.status(200).json({
      message:token
    });
});

module.exports=router;
