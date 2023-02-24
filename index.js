const express = require("express") ;
const cors = require("cors") ;
const {connection} = require("./configs/db") ;
const {userRouter} = require("./routes/userRoute") ;
const {exerRouter} = require("./routes/exercise") ;

require("dotenv").config() ;
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;

app.get("/" , (req, res)=>{
    res.send("welcome to STAYFIT backend") ;
}) ;

app.use("/user" , userRouter ) ;
app.use("/exercise" , exerRouter ) ;

app.listen(process.env.port , async()=>{
    try{
        await connection ;
        console.log( "connected to DATABASE" ) ;
    }catch(err){
        console.log( `from DB : ${err}` ) ;
    }
    console.log(`server running (${process.env.port})`) ;
})