import React ,{useEffect, useState}from 'react'

const UseEffect = (props) => {
    // const [count , setCount]=useState(0)
    // const[nama ,setNama]=useState('')
    const [tampil , setTampil]=useState(false)
    useEffect(()=>{
        // setTimeout(()=>{
        //     setCount(count+1);
        // },1000)

        alert("alloow")
    },[tampil]) //[] hanya akan menjaalnkan sekali
  return (
    <div>
      {/* <button >count: {count}</button> */}
      {/* <h1>Nama : {nama}</h1> */}
      {/* <button onClick={useEffect}>click me</button> */}
      <button onClick={()=>setTampil(!tampil)}>tampil</button>
    </div>
  )
}

export default UseEffect

