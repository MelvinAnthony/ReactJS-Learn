import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {

  const [input, setInput] = useState("");

  //using useRef
  const inputRef = useRef();

  console.log("start ")


  useEffect(() =>{
    inputRef.current = input
  },[input])

  const display = ()=>{
    console.log(inputRef.current)
  }

  return (
    <div>
      <h1>Melvin</h1>
        <input 
        /* using useRef */

          ref={inputRef}
          type='text'

          value={input} 
          onChange={(event) => setInput(event.target.value)}
          
    />

    <p>My name is {input}</p>

    <p>My name is: {inputRef.current}</p>

    {/* <p>My name is: {inputRef.current?.value}</p> */}


    <button onClick={display}>Show Input</button>
    </div>
  )
}

export default App;
