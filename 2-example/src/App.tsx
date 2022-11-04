import React from "react";
import logo from "./logo.svg";
import nd from "./images/user.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { idText } from "typescript";
import ItemUserClass from "./features/ItemUserClass";
import userEvent from "@testing-library/user-event";
// import List from "./example/Ex3/List";
// import ListBarClass from "./homework/session 2/BT1ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt2ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt3ss02/ListBarClass";
// import ListBarClass from "./homework/session 2/Bt4ss02/ListBarClass";
// import AddNumber from "./example/Ex2/AddNumber";
// import Fb from "./example/Ex1/Fb"
import Music from "./example/Ex3/Music";


function App() {


  return (
    <div>
      {/* <ListBarClass /> */}
      {/* <Fb/> */}
      <Music/>
    </div>
  );
}

export default App;
