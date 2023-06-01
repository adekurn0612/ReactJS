// import React from 'react'
// import parent from './parent'
// //bisa mengguankan extract dengan mengubah (props) menjadi
// //nama var dan di ()=>props.fungsiUbah("mawar")} tidak pakai props
// const child = (props) => {
//   return (
//     <div>
//         <div>
//         <h1>Nama : {props.namaawal1}</h1>
//         </div>
//         <button onClick={()=>props.fungsiUbah("mawar")}>mawar</button>
//         <button onClick={()=>props.fungsiUbah("melati")}>melati</button>
//         <button onClick={()=>props.fungsiUbah("ga tau")}>ga tau</button>
//     </div>
//   )
// }


// export default child

import React from 'react';

const Child = (props) => {
  return (
    <div>
      <div>
        <h1>Nama : {props.namaawal1}</h1>
      </div>
      <button onClick={() => props.fungsiUbah("mawar")}>mawar</button>
      <button onClick={() => props.fungsiUbah("melati")}>melati</button>
      <button onClick={() => props.fungsiUbah("ga tau")}>ga tau</button>
    </div>
  );
};

export default Child;



