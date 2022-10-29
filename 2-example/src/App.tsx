import React from "react";
import logo from "./logo.svg";
import nd from "./images/nd.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { idText } from "typescript";

//Custom Type
interface IUser {
  id: number;
  age: number;
  name: string;
  address: string;
}

function App() {
  // const user : IUser = {
  //   id : 1,
  //   age : 22,
  //   name : "Nhất Duy",
  //   address : "38 Yên Bái",
  // }

  const arr: Array<IUser> = [
    {
      id: 1,
      age: 22,
      name: "Nhất Duy",
      address: "38 Yên Bái",
    },

    {
      id: 2,
      age: 23,
      name: "Nhất Duy 1",
      address: "39 Yên Bái",
    },

    {
      id: 3,
      age: 24,
      name: "Nhất Duy 2",
      address: "40 Yên Bái",
    },
  ];
  return (
    <div>
      <div className="main">
        <h1 className="head">My Information</h1>
        {/* <img className='img' src={nd} alt=""/>
      <p>Age : {user.age}</p>
      <p>Name : {user.name}</p>
      <p>Address : {user.address}</p> */}
        {arr?.map((user : IUser)=>{
          return (
            <div className="bg" key={user.id}>
              <div className="form">
              <img className='img' src={nd} alt=""/>
              </div>
              <p>{user.age}</p>
              <p>{user.name}</p>
              <p>{user.address}</p>
              <hr></hr>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
