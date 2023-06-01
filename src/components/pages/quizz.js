// import React, { useState, useEffect } from 'react'

// const Quizz = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [labelValue, setLabelValue] = useState('');
//   const [butt, setButton] = useState(false);
//   const [isDelete, setIsDelete] = useState(false);
//   const [isUpdate, setIsUpdate] = useState(false);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   }

//   useEffect(() => {
//     setLabelValue(inputValue);
//   }, [butt,isDelete, isUpdate]);

//   return (
//     <div>
//       <div>
//         <input type='text' value={inputValue} onChange={handleInputChange} />
//         <button onClick={() => setButton(!butt)}>add</button>
//         <button onClick={() => { setInputValue(''); setIsDelete(!isDelete) }}>delete</button>
//         <button onClick={() => setIsUpdate(!isUpdate)}>update</button>
//       </div>
//       <label style={{ border: '2px solid black' }}>{labelValue}</label>
//     </div>
//   )
// }

// export default Quizz;
