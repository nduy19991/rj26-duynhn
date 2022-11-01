import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
  title: string;
  percent: string;
  color1: string;
  color2: string;
}

interface IProps {
  userProps: IUser;
}

class RenderListBarClass extends Component<IProps> {
  render() {
    return (
      <div className="main">
        <div className="bar">
        <div
          className="right"
          style={{
            background: this.props.userProps.color1,
          }}
        >
          {this.props.userProps.title}
        </div>

        <div className="bg">
          <p
            className="left"
            style={{
              background: this.props.userProps.color2,
              width: this.props.userProps.percent
            }}
          >
            {this.props.userProps.percent}
          </p>
        </div>
      </div>
      </div>
    );
  }
}
export default RenderListBarClass;

