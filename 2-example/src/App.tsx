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
      age: 25,
      name: "Văn Việt",
      address: "72 Nguyễn Tri Phương",
    },

    {
      id: 3,
      age: 21,
      name: "Ngọc Hùng",
      address: "101 Hùng Vương",
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
              <p>No : {user.id}</p>
              <p>Age : {user.age}</p>
              <p>Name : {user.name}</p>
              <p>Address : {user.address}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
