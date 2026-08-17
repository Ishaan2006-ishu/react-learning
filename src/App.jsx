import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx'
import Counter from './components/Counter.jsx'
import Timer from './components/Timer.jsx'
function App(){
  const [count,setCount]=useState(0);

  // useEffect(()=>{
  //   console.log("effect");
  // },[])
  // useEffect(()=>{
  //   console.log("effect: ",count);
  //   return ()=>{
  //     console.log("cleanup: ",count);
  //   }
  // },[count])
  //const college=["gla", "iitdelhi", "mit" , "jiit", "mnit"]
 
  function handleChange(event){
    const {name,value}=event.target
    setFormData({
      ...formData,
      [name]:value
    });
  }
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""

  })
  function handleSubmit(event){
    event.preventDefault();
    console.log("form submitted")
    console.log(formData)
  }
  
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
        name="name"
        value={formData.name}
        onChange={handleChange}
       />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
       />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
       />
       <button type="submit">
        Submit
       </button>

      </form>
       <h2>Hello, {formData.name}</h2>
       <h2>Hello, {formData.email}</h2>
       <h2>Hello, {formData.password}</h2>
      
      
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