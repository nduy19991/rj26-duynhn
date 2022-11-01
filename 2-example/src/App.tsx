import React from "react";
import logo from "./logo.svg";
import nd from "./images/user.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { idText } from "typescript";
import ItemUserClass from "./features/ItemUserClass";
import userEvent from "@testing-library/user-event";


interface IUser {
  id: number;
  age: number;
  name: string;
  address: string;
}

function App() {

  const arr: Array<IUser> = [
    {
      id: 1,
      age: 22,
      name: " Nguyễn Hữu Nhất Duy",
      address: "38 Yên Bái",
    },

    {
      id: 2,
      age: 25,
      name: "Đỗ Hoàng",
      address: "72 Nguyễn Tri Phương",
    },

    {
      id: 3,
      age: 21,
      name: "Đàm Ngọc Hưng",
      address: "101 Hùng Vương",
    },
  ];
  return (
    <div className="all">
      {arr?.map((user : IUser ) => (
        <ItemUserClass key={user?.id} userProps={user}/>
      ))}
    </div>
  );
}

export default App;
