import { useState,useEffect } from "react";
function User({userId}){
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
   async function getUser() {
     setLoading(true);
    setError("");
   
    try {
        
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error("failed to fetch user");
        }

        const data = await response.json();

        setUser(data);

    } catch (error) {
       setError(error.message);
    }
    finally {
        setLoading(false);
    }
}
    useEffect(()=>{
        getUser();
    },[userId])

    return(
        <div>
            { user && <h2>{user.name}</h2>}
             {loading && <p>Loading user...</p>}

        {error && <p>{error}</p>}

        {user && <h2>{user.name}</h2>}
        </div>
    )
}
export default User;