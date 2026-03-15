import { useState,useEffect } from "react";

function UseEffectHook(){
  // const [count, setCount] = useState(0);
  // const [text,setText]=useState("");

  // useEffect(function(){
  //   console.log("Counter: ", count);
  // },[count])

  // return (
  //   <div className="flex flex-col items-center gap-4">
  //     <h2>Counter:{count}</h2>
  //     <button className="border p-3" onClick={()=>setCount(count+1)}>
  //       Increase
  //     </button>
  //     <input className="border" type="text" value={text} onChange={function(event){
  //       setText(event.target.value)}}>
  //     </input>
  //     <p>Text: {text}</p>
  //   </div>



  // const [count,setCounter] = useState(0);

  // useEffect(function(){
  //   const timer = setInterval(function(){
  //     setCounter(prev=>prev+1);
  //   },1000)
  //   return function(){
  //     clearInterval(timer)
  //   }
  //   },[])

  // useEffect(function(){
  //   console.log("Counter: ",count)
  // },[count])

  // return(
  //   <div>
  //   <h1>counter: {count}</h1>
  //   </div>
  //   );

const [count,setCount] = useState(0);
const [loading, setLoading] = useState(true);

useEffect(function(){
  const timer = setInterval(function(){
    setLoading(false)
  },3000)
  return function(){
    clearInterval(timer)
  }
},[])

useEffect(function(){
    if(!loading){
      const interval = setInterval(function(){
      setCount(prev=>prev+1)
      },1000)
      return function(){
        clearInterval(interval)
      }
    }  
},[loading])

if(loading){
  return <h2>Loading...</h2>
}
return( 
  <div>
    <h2>Data Loaded</h2>
    <h2>Counter: {count}</h2>
  </div>
);
}

export default UseEffectHook;