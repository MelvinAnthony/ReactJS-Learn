import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  // useState
  const [num1, setNum1]= useState(100);
  const [num2, setNum2]= useState(1000);


  // useEffect to pass two parameters. callback function, array
  useEffect(() => {
    //setNum1(500)
    console.log("from useEffect: ")

    return () =>{
      //setNum1(200)
      console.log("memeory cleaned fro  return.");
    }
  },[num1, num2])

 console.log(num1)

  return (
    <div>
        <h1>{num1}</h1>
        <h1>{num2}</h1>
        <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
        <button onClick={() => setNum2((curr) => curr + 1)}>Add</button>
    </div>
  );
}

export default App