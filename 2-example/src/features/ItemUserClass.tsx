import React, { Component } from 'react'
import nd from "../images/user.jpg";



interface IUser {
    id: number;
    age: number;
    name: string;
    address: string;
}

interface IProps {
    userProps : IUser
}

class ItemUserClass extends Component<IProps> {
  render() {
    return (
        <div>
        <div className="main">
          <h1 className="head">My Information</h1>
              <div key={this.props.userProps.id}>
                <div className="form">
                  <img className="img" src={nd} alt="" />
                </div>
                <p>No : {this.props.userProps.id}</p>
                <p>Name : {this.props.userProps.name}</p>
                <p>Age : {this.props.userProps.age}</p>
                <p>Address : {this.props.userProps.address}</p>
                <hr></hr>
              </div>
        </div>
      </div>
    )
  }
}

export default ItemUserClass