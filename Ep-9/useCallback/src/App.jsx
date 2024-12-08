import React, { useState, useCallback, useMemo } from 'react';
import List from './List';

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [parseInt(number) + 1, parseInt(number) + 2, parseInt(number) + 3];
  }, [number]);


/* 
  //usng useMemo
  const getItem = useMemo(()=>{
    return [number + 1, number + 2, number + 3];
  },[number]) */

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <List getItem={getItem} />
    </div>
  );
};

export default App;
