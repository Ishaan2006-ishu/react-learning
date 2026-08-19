 import { useEffect, useState } from 'react';
// import ProductCard from './components/ProductCard.jsx'
// import Counter from './components/Counter.jsx'
// import Timer from './components/Timer.jsx'
// function App(){
//   const [count,setCount]=useState(0);
//   const [error,setError]=useState({
//     name:"",
//     email:"",
//     password:""
//   });

//   // useEffect(()=>{
//   //   console.log("effect");
//   // },[])
//   // useEffect(()=>{
//   //   console.log("effect: ",count);
//   //   return ()=>{
//   //     console.log("cleanup: ",count);
//   //   }
//   // },[count])
//   //const college=["gla", "iitdelhi", "mit" , "jiit", "mnit"]
// //    async function test() {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// //     console.log(response);
    
// //     const data = await response.json();

// //     console.log(data);
// // }
 
 
//   // const [formData,setFormData]=useState({
//   //   name:"",
//   //   email:"",
//   //   password:""

//   // })
//   //  function handleChange(event){
//   //   const {name,value}=event.target
    
//   //   setError(prev => ({
//   //       ...prev,
//   //       [name]: ""
//   //   }));
    
//   //   setFormData({
//   //     ...formData,
//   //     [name]:value
//   //   });
//   // }
//   // function handleSubmit(event){
//   //   event.preventDefault();
//   //   let hasError=false;
//   //   if(formData.name.trim()===""){
//   //     setError({
//   //       ...error,
//   //       name:"name is required"

//   //     });
//   //     hasError=true;
      
//   //   }
//   //   if(formData.email.trim()===""){
//   //     setError({
//   //       ...error,
//   //       email:"email is required"
//   //     });
//   //     hasError=true;
      
//   //   }
//   //   if(formData.password.trim()===""){
//   //     setError({
//   //       ...error,
//   //       password:"password is required"
//   //     });
//   //     hasError=true;
      
//   //   }
//   //   if(hasError==true){
//   //     return;
//   //   }
//     test();
   
    
    
//     console.log("form submitted")

    
    
   
//   }
  
//   return (
//     <div>
      
//       <form onSubmit={handleSubmit}>
//         <input
        
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
        
//        />
//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//        />
//       <input
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//        />
//        {error.name && <p>{error.name}</p>}
//        {error.email && <p>{error.email}</p>}
//        {error.password && <p>{error.password}</p>}
//        <button type="submit">
//         Submit
//        </button>

//       </form>
//        <h2>Hello, {formData.name}</h2>
//        <h2>Hello, {formData.email}</h2>
//        <h2>Hello, {formData.password}</h2>
      
      
//       <Counter count={count} setCount={setCount} />
//       <Counter count={count} setCount={setCount} />
      
//       <h1>React learning</h1>
//       <p>Welcome to React!</p>
      
//       <ProductCard name="macbookpro" price={10000}  />
// <ProductCard name="victus" price={50000}  />
// <ProductCard name="dell" price={30000}  />
//     </div>
    
//   )
// }


function App(){
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [errors,setError]=useState("");
  async function getUsers() {
    // setLoading(true);
    // setError("");

    // const response=await fetch("https://jsonplaceholder.typicode.com/users");
    // if(!response.ok){
    //   setError("failed to fetch user");
    //   setLoading(false);
    //   return;
    // }
    // const data=await response.json();

    // setUsers(data);
    // console.log(data)
    // setLoading(false);
    setLoading(true);
    setError("");
     try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

    } catch (error) {
        setError(error.message);

    } finally {
        setLoading(false);
    }


    
  }

  return(
    <div>
      <button onClick={getUsers}> GetUser </button>
      {users.map(user=>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          </div>

      ))}
      

      <p>Loading: {loading ? "Yes" : "No"}</p>
<p>{errors}</p>

    </div>

  )
} 
 export default App;