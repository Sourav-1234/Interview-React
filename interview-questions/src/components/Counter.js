import { useEffect,useState } from "react";


function Counter(){
    const [count,setCount]=useState(0);

   useEffect(()=>{
    console.log("Effect triggered" ,count)
   } ,[]);

   const increment =()=>{
     setCount(count+1);
   }
   const decrement=()=>{
    setCount(count-1);
   };

   
    return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );

}
export default Counter;