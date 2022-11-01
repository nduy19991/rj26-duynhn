import React from "react";
import nd from "../images/user.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
    id: number;
    age: number;
    name: string;
    address: string;
}

interface IProps {
    userProps : IUser
}

function ItemUser(props: IProps) {
    const {userProps} = props;
  return (
    <div>
      <div className="main">
        <h1 className="head">My Information</h1>
            <div key={userProps.id}>
              <div className="form">
                <img className="img" src={nd} alt="" />
              </div>
              <p>No : {userProps.id}</p>
              <p>Name : {userProps.name}</p>
              <p>Age : {userProps.age}</p>
              <p>Address : {userProps.address}</p>
              <hr></hr>
            </div>
      </div>
    </div>
  );
}

export default ItemUser;
