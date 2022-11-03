import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
  title: string;
  number: string;
  color: string;
  logo: string;
}

interface IProps {
  userProps: IUser;
}

class RenderListBarClass extends Component<IProps> {
  render() {
    return (
      <div className="main" style={{background: this.props.userProps.color}}>
        <img className="img" src={this.props.userProps.logo} alt="" />
        <div className="title">{this.props.userProps.title}</div>
        <div className="number">{this.props.userProps.number}</div>
      </div>
    );
  }
}
export default RenderListBarClass;

