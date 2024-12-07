import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(1);

  const handleAdd = ()=>{
/*       x = x+1
    console.log("x: ",x) */

    //setNum(2)

    // call back function
    setNum((currValue) =>{
      return currValue + 1
    });
  }
  return (
    <div>
      <h1>Melvin {num}</h1>    
      <button onClick={() => handleAdd()}>Add</button> 
 
    </div>
    

  )
}

export default App
