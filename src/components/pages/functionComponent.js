import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [nama , setNama] = useState(0);

  const tambah = () => {
    setCount(count + 1);
  };

  const kurang = () => {
    setCount(count - 1);
  };
  const showName =(e)=>{
    setNama(e.target.value)
  };

  return (
    <div>
      <h4>Count : {count} nama : {nama}</h4>
      <div>
      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
      </div>
     
    <input type="text" onChange={showName}/>
    </div>
  );
};



export default Counter

