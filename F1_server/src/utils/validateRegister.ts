import { UserNameInput } from "../resolvers/user";


export const validateRegister=(options:UserNameInput)=>{

//USERNAME VALIDATE
    //validate username lenght (min 6)
    if(options.username.length<=5)
    return{
        errors:[{field: "username",message: "lenght must be greater than 5"}]
    }

    //validate if username includes @ sing
    if(options.username.includes("@")){
        return{
            errors:[{field: "username",message: "username cannot include an @"}]
        }
    }
//PASSWORD VALIDATE
    //validate password lenght (min 6)
    if(options.password.length<=5){
        return{
            errors:[{field: "password",message: "password must be greater than 5"}]
        }
    }
//EMAIL VALIDATE
    //if email includes @
    if(!options.email!.includes("@")){
        return{
            errors:[{field: "email",message: "its not email"}]
        }
    }

    


}