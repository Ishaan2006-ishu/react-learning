import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx'
import Counter from './components/Counter.jsx'
function App(){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("effect");
  },[])
  
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      
      <h1>React learning</h1>
      <p>Welcome to React!</p>
      
      <ProductCard name="macbookpro" price={10000}  />
<ProductCard name="victus" price={50000}  />
<ProductCard name="dell" price={30000}  />
    </div>
    
  )
}
export default App;