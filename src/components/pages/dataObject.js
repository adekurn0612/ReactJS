import React, { useState } from 'react'

const DataObject = (props) => {
  const [person, setPerson] = useState({
    nama: "ade",
    alamat: "bengkulu",
    umur: 20
  });

  const handleChange = (e) => {
    setPerson(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <div>
        <input type='text' name='nama' onChange={handleChange} />
      </div>
      <div>
        <input type='text' name='alamat' onChange={handleChange} />
      </div>
      <div>
        <input type='text' name='umur' onChange={handleChange} />
      </div>
      <p>Nama : {person.nama}</p>
      <p>Alamat : {person.alamat}</p>
      <p>Umur : {person.umur}</p>
    </div>
  )
}

export default DataObject
