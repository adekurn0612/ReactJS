// import React, { Component, useState } from 'react'
// import child from './child';

// const parent=(props) =>{
// const [nama , setNama] = useState(0);
// const [namaBungah, setnamaBungah]= useState('ga tau')
// const ubahNamaBungah=()=>{
//     setnamaBungah(namaBungah)

// }
//   return (
//     <div>
//         <div>
//       <input type='text'  onChange={(e)=>setNama(e.target.value)}/>
//     <child namaawal1={nama}/>
//     </div>
//     {/* <input type='text' onChange={(e).} /> */}
//     <h1>nama bungah : {namaBungah}</h1>
//     <child fungsiUbah={ubahNamaBungah}/>
//     </div>
//   )
// }


// export default parent


import React, { useState } from 'react';
import Child from './child';

const Parent = (props) => {
  const [nama, setNama] = useState('');
  const [namaBunga, setNamaBunga] = useState('ga tau');

  const ubahNamaBunga = (namaBaru) => {
    setNamaBunga(namaBaru);
  };

  return (
    <div>
      <div>
        <input type='text' onChange={(e) => setNama(e.target.value)} />
        <Child namaawal1={nama} fungsiUbah={ubahNamaBunga} />
      </div>
      <h1>nama bunga: {namaBunga}</h1>
    </div>
  );
};

export default Parent;


