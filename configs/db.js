const mongoose = require("mongoose") ;
require("dotenv").config() ; 

const connection = mongoose.connect(`${process.env.mongoATLAS}`) ;

module.exports = { connection } ;