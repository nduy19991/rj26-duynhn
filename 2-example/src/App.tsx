import React from "react";
import logo from "./logo.svg";
import nd from "./images/user.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { idText } from "typescript";
import ItemUserClass from "./features/ItemUserClass";
import userEvent from "@testing-library/user-event";
// import ListBarClass from "./homework/session 2/BT1ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt2ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt3ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt4ss02/ListBarClass";
import AddNumber from "./homework/session 2/BT5ss02/AddNumber";

// interface IUser {
//   id: number;
//   age: number;
//   name: string;
//   address: string;
// }

function App() {


  return (
    <div>
      {/* {arr?.map((user : IUser ) => (
        <ItemUserClass key={user?.id} userProps={user}/>
      ))} */}
      {/* <ListBarClass /> */}
      <AddNumber/>
    </div>
  );
}

export default App;
