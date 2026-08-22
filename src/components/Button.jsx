import UserContext from "../context/UserContext"
import { useContext,useState } from "react"
function Button(){
    const user=useContext(UserContext);
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);

    function getProfile(){
        setName(user.name);
        setAge(user.age);

    }


    return(
        <div>
            <button onClick={getProfile}>Profile</button>
            <h1>{name}</h1>
            <h2>{age}</h2>

        </div>
    )
}
export default Button;