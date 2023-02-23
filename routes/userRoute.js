const express = require("express") ;
const jwt = require("jsonwebtoken") ;
const bcrypt = require("bcrypt") ;

require("dotenv").config() ;

const {UserModel} = require("../models/userModel") ;

const userRouter = express.Router() ;


userRouter.get("/" , async (req, res)=>{
    const data = await UserModel.find() ;
    res.send({"msg" : data}) ;
}) ;





/// >>> Register user Route


//    {
//     "name"  : "" ,
//     "email" : "@gmail.com" ,
//     "password" : "" ,
//     "gender" : "male" 
//    }



userRouter.post( "/signup" , async(req , res)=>{
        const { name , email , password , gender } = req.body ;

        try{

            bcrypt.hash( password , 3 , async( err , password )=>{
                 if( err){
                    res.send( {"msg" : err } ) ;
                 }
                 const data = new UserModel({name , email , password , gender}) ;
                 await data.save() ;
                 res.send( {"msg" : "SignUp Successfully" } ) ;
            }) ;

        }catch(err){
            res.send( {"msg" : err } ) ;
        }
});



// >>> login user 
userRouter.post("/login" , async(req , res )=>{
        
    const {  email , password } = req.body ;
    const user = await UserModel.findOne({email}) ;

    try{

        if( user ){
            // check password
            bcrypt.compare(password , user.password , (err ,result)=>{
                if( err) {
                    res.send( {"msg" : err } ) ;
                }

                let token =  jwt.sign( { userID :  `${user._id}` } , `${process.env.key}` ) ;
                if( token ){
                     res.send( {"msg" : "login successfully" , "token" : token } ) ;
                }
                
            })

        }else{
            res.send({"msg" : "enter correct email please"})
        }

    }catch(err){
        res.send( {"msg" : err} ) ;
    }
}) ;


module.exports = {userRouter} ;
