import React from 'react';
import logo from './logo.svg';
import nd from './images/nd.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

interface IUser {
  age : number,
  name : string,
  address :string,
}

function App() {

  const user : IUser = {
    age : 22,
    name : 'Nhất Duy',
    address : '38 Yên Bái'


  }
  return (
    <div className='bg'>
      <div className='form'>
        <h1 className='head'>My Information</h1>
      <img className='img' src={nd} alt=""/>
      <p>Age : 22</p>
      <p>Name : Nhất Duy</p>
      <p>Address : 38 Yên Bái</p>
      <p>Facebook : <a target="blank" href="https://www.facebook.com/profile.php?id=100076814261295">Nhất Duy</a></p>
      <p>Email : <a href="mailto:manhph43k14@gmail.com" target="_blank">nduy19991@gmail.com</a></p>
      </div>
    </div>
  );
}

export default App;
