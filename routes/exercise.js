const express = require("express") ;
const { ExerModel } = require("../models/exerciseModel") ;

const exerRouter = express.Router() ;

//getting all the post 
exerRouter.get("/" , async(req , res )=>{
     
     const query = req.query ;
     let data ;

     try{
          data = await ExerModel.find({query}) ;
          res.send( {"msg" : data} ) ;

     }catch(err){ 
          res.send( {"msg" : err} ) ;
     }
     
}) ;



// // >>> posting data

// // format 
// {
//      "img1"     : "String" ,
//      "img2"     : "String" ,
//      "name"     : "String" ,
//      "muscle"   : "String" ,
//      "type"     : "String"     
//   }

exerRouter.post("/" , async(req , res )=>{

     const { img1 , img2 , name , muscle , type  } = req.body ;

     try{
          const data = new ExerModel( {   img1 , img2 , name , muscle , type } ) ;
          await data.save() ;
          res.send( {"msg" : "Exercise added"} ) ;
     }catch(err){ 
          res.send( {"msg" : err} ) ;
     }
     
}) ;



// updating by ID 
exerRouter.patch("/:id" , async(req , res )=>{

     const payload = req.body ;
     const ID = req.params.id ;
     try{
          await ExerModel.findByIdAndUpdate( {_id : ID } , payload ) ;
          res.send( {"msg" : "exercise details updated"} ) ;
     }catch(err){ 
          res.send( {"msg" : err} ) ;
     }
     
}) ;



// deleting by ID 
exerRouter.delete("/:id" , async(req , res )=>{

     const ID = req.params.id ;
     try{
          await ExerModel.findByIdAndDelete( {_id : ID } ) ;
          res.send( {"msg" : "exercise deleted"} ) ;
     }catch(err){ 
          res.send( {"msg" : err} ) ;
     }
     
}) ;


module.exports = { exerRouter } ;