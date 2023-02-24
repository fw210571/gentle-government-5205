const mongoose = require("mongoose") ;
require("dotenv").config() ; 

const userSchema = mongoose.Schema( {

    name     : String ,
    email    : String ,
    password : String , 
    gender   : String
}) ;


const UserModel = mongoose.model( "userCollection" , userSchema ) ;

module.exports = { UserModel } ;