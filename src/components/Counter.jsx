import { useState } from "react";

function Counter({count,setCount}){
   // const [count,setCount]=useState(0);
    function inc(){
        setCount(preCount=>preCount+1);
    }
    function dec(){
        setCount(preCount=>preCount-1);
    }
    return(
        <div>
            <div> Count: {count}</div>
           
            <div>
                <button onClick={inc}>Increase</button>
                <button onClick={dec}>Decrease</button>
            </div>
        
      </div>

    )
}
export default Counter;