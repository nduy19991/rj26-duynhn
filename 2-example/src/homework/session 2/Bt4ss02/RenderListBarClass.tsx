import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
  logo: string;
  title: string;
  color: string;
  percent: string
}

interface IProps {
  userProps: IUser;
}

class RenderListBarClass extends Component<IProps> {
  render() {
    return (
      <div className="bar">
        <div className="logo" style={{background: this.props.userProps.color }}><img className="img" src={this.props.userProps.logo} alt="" /></div>
        <div className="title">{this.props.userProps.title}</div>
        <div className="bg">
          <div
            className="color"
            style={{
              background: this.props.userProps.color,
              width: this.props.userProps.percent,}}>
          </div>
        </div>
      </div>
      
    );
  }
}
export default RenderListBarClass;

