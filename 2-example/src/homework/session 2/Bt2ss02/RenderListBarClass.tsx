import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IUser {
  title: string;
  number: string;

}

interface IProps {
  userProps: IUser;
}

class RenderListBarClass extends Component<IProps> {
  render() {
    return (
      <div className="main">
        <div className="tab">
          <div className="title">
            {this.props.userProps.title}
          </div>

          <div className="number">
            {this.props.userProps.number}
          </div>

          <div className="list">

            <div className="column">
            <div className="bg" style={{background: "#DC143C",}}>
              <div className="right" style={{height: "75%",}}>
              </div>
            </div>
            <div className="day">MO</div>
            </div>

            <div className="column">
            <div className="bg" style={{background: "#48D1CC",}}>
              <div className="right" style={{height: "50%",}}>
              </div>
            </div>
            <div className="day">TUE</div>
            </div>

            <div className="column">
            <div className="bg" style={{background: "#FFD700",}}>
              <div className="right" style={{height: "60%",}}>
              </div>
            </div>
            <div className="day">WED</div>
            </div>

            <div className="column">
            <div className="bg" style={{background: "#32CD32",}}>
              <div className="right" style={{height: "30%",}}>
              </div>
            </div>
            <div className="day">THU</div>
            </div>

            <div className="column">
            <div className="bg" style={{background: "#808080",}}>
              <div className="right" style={{height: "50%",}}>
              </div> 
            </div>
            <div className="day">FRI</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default RenderListBarClass;

