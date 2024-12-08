import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

const App = () => {
  const [number, setNumber] = useState(0); // For managing the number input
  const [dark, setDark] = useState(false); // For managing the theme toggle


  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  },[number]);


/* 
  // to make in useEffect
  const [double,setDoubel] = useState(0)
  
  useEffect(() => {
    setDoubel(slowFunction(number));
  },[number])  */

  const themeStyle = useMemo(() => {
    return{
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  },[dark])

  useEffect(()=>{
    console.log("Theme Changed...")
  },[themeStyle])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>

      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default App;

function slowFunction(num) {
  console.log("run slow...")
  for (let i = 0; i < 1000000; i++) {} // Simulate a slow computation
  return num * 2;
}
