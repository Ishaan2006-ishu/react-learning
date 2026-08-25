import { memo } from "react";
const Login=memo(function Login({name,handleClick}){
    console.log("user card renderd")
    return (
        <div>
            <h1>login page</h1>
            <h2>{name}</h2>
            
        </div>
    )
})
export default Login;