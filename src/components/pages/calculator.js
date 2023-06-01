import React, { useState } from 'react'

const Calculator = (props) => {
const[angka1,setangka1]=useState(0);
const[angka2,setangka2]=useState(0);
const[hasil,sethasil]=useState(0);

const penjumlahan = () =>{
    sethasil(+angka1 + +angka2);
}

const pengurangan = () =>{
    sethasil(+angka1 - +angka2);
}

const pengalian = ()=>{
    sethasil(+angka1 * +angka2);
}

const pembagian = ()=>{
    sethasil(+angka1 / +angka2);
}
  return (
    <div>
      <h5>angka 1</h5><input type='text' onChange={(e)=>setangka1(e.target.value)}/>
      <h5>angka 2</h5><input type='text' onChange={(e)=>setangka2(e.target.value)}/>
    <div>
        <h3>hasil : {hasil}</h3>
    </div>
    <button onClick={penjumlahan}>+</button>
    <button onClick={pengurangan}>-</button>
    <button onClick={pengalian}>x</button>
    <button onClick={pembagian}>/</button>
    </div>
  )
}

export default Calculator
