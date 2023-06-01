import React, { Component } from 'react';

class TampilNama extends Component {
  state = { nama: '' };

//   tampilNama = () => {
//     alert(this.state.nama);
//   };

 simpanNama = (e) => {
    this.setState({ nama: e.target.value });
  };
  render() {
    return (
      <div>
        <label>Nama : {this.state.nama}</label>
        <h2>
        <input type="text"  onChange={this.simpanNama}/>
        </h2>
        {/* <button onClick={this.simpanNama}>Tampilkan nama</button> */}
      </div>
    );
  }
}

export default TampilNama;
