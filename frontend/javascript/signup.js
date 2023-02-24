let register_button = document.getElementById("sign-button") 
let url = `localhost:5050`;
// localhost:5050/user/signup
register_button.addEventListener("click" , async (event)=>{
    event.preventDefault() ;

    //catching data from inputs
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;
    let gender = document.getElementById("gender").value  ;

    let userObj = { name , email , password , gender } ;

    if( name && email && password && gender){
        try{
            const response = await fetch( `${url}/user/signup` , {
                method: "POST" ,
                headers:{
                    "Content-Type" : "application/json" 
                } ,
                body : JSON.stringify(userObj) 
            }) ;
            let result = await response.json() ;
            //console.log(result.msg) ;
            alert(result.msg) ;
            if(result.msg == `${name} signed successfully` ){
                window.location.href = "login.html" ;
            }


        }catch(err){
             console.log({"404_not_found" : err} )
             alert({"404_not_found" : err}) ;
        }
    }else {
        alert("please fill the details first")

    }
} )