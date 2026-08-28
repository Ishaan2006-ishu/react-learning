//  import { useEffect, useState } from 'react';
//  import User from './components/User.jsx'
//  import useFetch from './hooks/useFetch.jsx'
// // import ProductCard from './components/ProductCard.jsx'
// // import Counter from './components/Counter.jsx'
// // import Timer from './components/Timer.jsx'
// // function App(){
// //   const [count,setCount]=useState(0);
// //   const [error,setError]=useState({
// //     name:"",
// //     email:"",
// //     password:""
// //   });

// //   // useEffect(()=>{
// //   //   console.log("effect");
// //   // },[])
// //   // useEffect(()=>{
// //   //   console.log("effect: ",count);
// //   //   return ()=>{
// //   //     console.log("cleanup: ",count);
// //   //   }
// //   // },[count])
// //   //const college=["gla", "iitdelhi", "mit" , "jiit", "mnit"]
// // //    async function test() {
// // //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// // //     console.log(response);
    
// // //     const data = await response.json();

// // //     console.log(data);
// // // }
 
 
// //   // const [formData,setFormData]=useState({
// //   //   name:"",
// //   //   email:"",
// //   //   password:""

// //   // })
// //   //  function handleChange(event){
// //   //   const {name,value}=event.target
    
// //   //   setError(prev => ({
// //   //       ...prev,
// //   //       [name]: ""
// //   //   }));
    
// //   //   setFormData({
// //   //     ...formData,
// //   //     [name]:value
// //   //   });
// //   // }
// //   // function handleSubmit(event){
// //   //   event.preventDefault();
// //   //   let hasError=false;
// //   //   if(formData.name.trim()===""){
// //   //     setError({
// //   //       ...error,
// //   //       name:"name is required"

// //   //     });
// //   //     hasError=true;
      
// //   //   }
// //   //   if(formData.email.trim()===""){
// //   //     setError({
// //   //       ...error,
// //   //       email:"email is required"
// //   //     });
// //   //     hasError=true;
      
// //   //   }
// //   //   if(formData.password.trim()===""){
// //   //     setError({
// //   //       ...error,
// //   //       password:"password is required"
// //   //     });
// //   //     hasError=true;
      
// //   //   }
// //   //   if(hasError==true){
// //   //     return;
// //   //   }
// //     test();
   
    
    
// //     console.log("form submitted")

    
    
   
// //   }
  
// //   return (
// //     <div>
      
// //       <form onSubmit={handleSubmit}>
// //         <input
        
// //         name="name"
// //         value={formData.name}
// //         onChange={handleChange}
        
// //        />
// //       <input
// //         name="email"
// //         value={formData.email}
// //         onChange={handleChange}
// //        />
// //       <input
// //         name="password"
// //         value={formData.password}
// //         onChange={handleChange}
// //        />
// //        {error.name && <p>{error.name}</p>}
// //        {error.email && <p>{error.email}</p>}
// //        {error.password && <p>{error.password}</p>}
// //        <button type="submit">
// //         Submit
// //        </button>

// //       </form>
// //        <h2>Hello, {formData.name}</h2>
// //        <h2>Hello, {formData.email}</h2>
// //        <h2>Hello, {formData.password}</h2>
      
      
// //       <Counter count={count} setCount={setCount} />
// //       <Counter count={count} setCount={setCount} />
      
// //       <h1>React learning</h1>
// //       <p>Welcome to React!</p>
      
// //       <ProductCard name="macbookpro" price={10000}  />
// // <ProductCard name="victus" price={50000}  />
// // <ProductCard name="dell" price={30000}  />
// //     </div>
    
// //   )
// // }


// function App(){
//   // const [users,setUsers]=useState([]);
//   // const [loading,setLoading]=useState(false);
//   // const [errors,setError]=useState("");
//   // async function getUsers() {
//   //   // setLoading(true);
//   //   // setError("");

//   //   // const response=await fetch("https://jsonplaceholder.typicode.com/users");
//   //   // if(!response.ok){
//   //   //   setError("failed to fetch user");
//   //   //   setLoading(false);
//   //   //   return;
//   //   // }
//   //   // const data=await response.json();

//   //   // setUsers(data);
//   //   // console.log(data)
//   //   // setLoading(false);
//   //   setLoading(true);
//   //   setError("");
//   //    try {
//   //       const response = await fetch(
//   //           "https://jsonplaceholder.typicode.com/users"
//   //       );

//   //       if (!response.ok) {
//   //           throw new Error("Failed to fetch users");
//   //       }

//   //       const data = await response.json();

//   //       setUsers(data);

//   //   } catch (error) {
//   //       setError(error.message);

//   //   } finally {
//   //       setLoading(false);
//   //   }
    


    
//   // }
//   // useEffect(() => {
//   //       getUsers()
//   //     },[])
//   //const {data:user,loading,error}=useFetch( "https://jsonplaceholder.typicode.com/users/5" )
//   const user1 = useFetch(
//     "https://jsonplaceholder.typicode.com/users/1"
// );

// const user2 = useFetch(
//     "https://jsonplaceholder.typicode.com/users/2"
// );

//   return(
//     // <div>
//     //   <User userId={5}/>
//     // </div>

//     <div>
//        {user1.loading && <p>Loading...</p>}

//         {user1.error && <p>{error}</p>}
//        {user2.loading && <p>Loading...</p>}

//         {user2.error && <p>{error}</p>}

//         <h2>{user1.data?.name}</h2>
//         <h2>{user2.data?.name}</h2>
    

//     </div>
    

    

//   )
// } 
//  export default App;

// import React, { useEffect, useReducer } from "react";
// import UserContext from "./context/UserContext";
// import Profile from "./components/Profile";
// const initialState={
//   count:0
// }
// function reducer(s,action){
//   if(action.type==="increment"){
//     return{
//       count:s.count+1
//     }
//   }
//   if(action.type==="decrement"){
//     return{
//       count:s.count-1
//     }
//   }
//   return s;
// }

// function App(){

//   const user={
//     name:"Ishaan",
//     age:20


//   }
//   const [state,dispatch]=useReducer(
//     reducer,initialState);
//   return (
//     // <div>
//     //   {/* <UserContext.Provider value={user}>
//     //     <Profile></Profile>
        

//     //   </UserContext.Provider> */}
//     // </div>
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"increment"})}>Increase</button>
//       <button onClick={()=>dispatch({type:"decrement"})}>decrease</button>

//     </div>
//   )
// }
// export default App;

// import { useReducer } from "react";
// import Card from "./components/Card";

// const initialState = {
//     name: "",
//     email: "",
//     password: "",
//     errors: {
//         name: "",
//         email: "",
//         password: ""
//     }
// };

// function reducer(state, action) {

//     if (action.type === "CHANGE_FIELD") {
//         return {
//             ...state,
//             [action.field]: action.value,

//             errors: {
//                 ...state.errors,
//                 [action.field]: ""
//             }
//         };
//     }

//     if (action.type === "VALIDATE") {

//         const errors = {
//             name: "",
//             email: "",
//             password: ""
//         };

//         if (state.name.trim() === "") {
//             errors.name = "Name is required";
//         }

//         if (state.email.trim() === "") {
//             errors.email = "Email is required";
//         }

//         if (state.password.trim() === "") {
//             errors.password = "Password is required";
//         }

//         return {
//             ...state,
//             errors
//         };
//     }

//     return state;
// }

// function App() {

//     const [state, dispatch] = useReducer(
//         reducer,
//         initialState
//     );

//     function handleChange(event) {

//         const { name, value } = event.target;

//         dispatch({
//             type: "CHANGE_FIELD",
//             field: name,
//             value: value
//         });
//     }

//     function handleSubmit(event) {

//         event.preventDefault();

//         dispatch({
//             type: "VALIDATE"
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>

//                 <input
//                     name="name"
                    
//                     onChange={handleChange}
//                 />

//                 {state.errors.name && (
//                     <p>{state.errors.name}</p>
//                 )}

//                 <input
//                     name="email"
                    
//                     onChange={handleChange}
//                 />

//                 {state.errors.email && (
//                     <p>{state.errors.email}</p>
//                 )}

//                 <input
//                     name="password"
                    
//                     onChange={handleChange}
//                 />

//                 {state.errors.password && (
//                     <p>{state.errors.password}</p>
//                 )}

//                 <button type="submit">
//                     Submit
//                 </button>

//             </form>
//             <Card>
//                 <h1>Ishaan Varshney</h1>
//                 <h2>Age :20</h2>
                
//             </Card>
//             <Card>
//                 <h1>Ishaan Varshney</h1>
//                 <h2>Age :20</h2>
                
//             </Card>
//             <Card>
//                 <h1>Ishaan Varshney</h1>
//                 <h2>Age :20</h2>
                
//             </Card>
//             <Card>
//                 <h1>Ishaan Varshney</h1>
//                 <h2>Age :20</h2>
                
//             </Card>
//             <Card>
//                 <h1>Ishaan Varshney</h1>
//                 <h2>Age :20</h2>
                
//             </Card>
//         </div>

//     );
// }

// export default App;

import { useCallback, useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App(){
    const [isAuthenticated,setIsAuthneticated]=useState(true);
    return(
        <BrowserRouter >
            <Routes>
                <Route
                    path="/login"
                    element={<Login />} 
                />
                <Route element={< PrivateRoute isAuthenticated={isAuthenticated} />
                }>
                    <Route
                        path="/dashboard"
                        element={<Dashboard />} 
                    >
                        <Route 
                            path="profile"
                            element={<Profile />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route 
                            path="card"
                            element={<Card />}
                        />
                        <Route path="settings" element={Settings} />
                        <Route path="settings" element={Settings} />
                        <Route path="settings" element={Settings} />
                        <Route path="settings" element={Settings} />
                        <Route path="settings" element={Settings} />
                        <Route path="settings" element={Settings} />
                    </Route>

                </Route>
                
            </Routes>
        </BrowserRouter >
    )

}

export default App;

// function App(){
//     const [count,setCount]=useState(0);
//     // function handleClick(){
//     //     console.log("user clicked");
//     // }
//     const handleClick=useCallback(()=>{
//         console.log("user clicked")

//     },[])
//     return(
//         <div>
//             <button onClick={()=>setCount(count+1)}>
//                 count: {count}
//             </button>
//             < Login name="ishu" handleClick={handleClick} />

//         </div>

//     )
// }
// export default App;