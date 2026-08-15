import { useEffect } from "react";
function Timer(){
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log('tick')
        },1000)
        return ()=>{
            clearInterval(timer);
            console.log("Timer stopped")
        }
    },[])
    return <h2>timer is running</h2>
}
export default Timer;

