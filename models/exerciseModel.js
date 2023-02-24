const mongoose = require("mongoose") ;

const exerSchema = mongoose.Schema( {
    img1     : String ,
    img2     : String ,
    name     : String ,
    muscle   : String ,
    type     : String
}) ;


const ExerModel = mongoose.model( "exerciseCollection" , exerSchema ) ;

module.exports = { ExerModel } ;