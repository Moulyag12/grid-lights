
import React,{useEffect, useState} from "react";
import './App.css';
function App() {
  const gridItems=[1,2,3,4,5,6,7,8,9];
  const [pick,setPick]=useState([]);
  const[active,setactive]=useState(false);
  const handleClick=(num)=>{
     setPick((prev)=>{
    const updated=prev.includes(num)?prev.filter(n => n !== num) :[...prev,num];
    return updated;
     });
      setactive(true);
  };

useEffect(()=>{
  if(!active || pick.length===0) return;
  const timeout=setTimeout(()=>{
    setPick((prev)=>prev.slice(0,-1));
  },1000);
  return ()=>clearTimeout(timeout);
},[pick,active]);

  return (
    <div className="App">
      
        <div className="inner">
          {
               gridItems.map((num)=>(
                <div key={num} className={`grid-item ${pick.includes(num)?"picked":""}`}
                    onClick={()=>handleClick(num)}
                ></div>
          ))}
          
        </div>
    </div>
  );
}

export default App;
