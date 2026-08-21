import {useState,useEffect} from 'react';

function useFetch(url){
    const [data,setData]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            setError("");

              try{
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error("failed to lead resource");
                }
                const result=await response.json();
                setData(result);

            
                }
                catch(error){
                    setError(error.message);
                }
                finally{
                    setLoading(false);
                }
                
        }
        fetchData();
      


    },[url]);

    return {data,loading,error};

}

export default useFetch;