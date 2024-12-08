import React, { useState, useEffect } from 'react';

const List = ({ getItem }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItem());
    console.log("setting item");
  }, [getItem]);

  return (
    <div>
      {item.map((items, index) => (
        <p key={index}>{items}</p>
      ))}
    </div>
  );
};

export default List;
