const express = require("express") ;

const {connection} = require("./configs/db") ;
const {userRouter} = require("./routes/userRoute") ;

require("dotenv").config() ;
const app = express() ;
app.use(express.json()) ;

app.get("/" , (req, res)=>{
    res.send("welcome to STAYFIT backend") ;
}) ;

app.use("/user" , userRouter ) ;

app.listen(process.env.port , async()=>{
    try{
        await connection ;
        console.log( "connected to DATABASE" ) ;
    }catch(err){
        console.log( `from DB : ${err}` ) ;
    }
    console.log(`server running (${process.env.port})`) ;
})