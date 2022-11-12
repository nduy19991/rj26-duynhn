import * as React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImHome, ImStack, ImLaptop, ImStatsBars } from 'react-icons/im';

interface IAppProps {}

interface IAppState {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      color1: "grey",
      color2: "grey",
      color3: "grey",
      color4: "grey",
    };
  }

  handleOnClickChange1 = () => {
    this.setState({
      color1: "green",
      color2: "gray",
      color3: "gray",
      color4: "gray",
    });
  };

  handleOnClickChange2 = () => {
    this.setState({
      color2: "green",
      color1: "gray",
      color3: "gray",
      color4: "gray",
    });
  };

  handleOnClickChange3 = () => {
    this.setState({
      color3: "green",
      color1: "gray",
      color2: "gray",
      color4: "gray",
    });
  };

  handleOnClickChange4 = () => {
    this.setState({
      color4: "green",
      color1: "gray",
      color2: "gray",
      color3: "gray",
    });
  };

  public render() {
    return (
        <div className="main">
        <div className="item">
            <button className="btn" style={{color: this.state.color1}} 
            onClick={this.handleOnClickChange1}>
              <ImHome className="icons" 
              style={{color: this.state.color1}}/>HOME</button> 
            <button className="btn" style={{color: this.state.color2}} 
            onClick={this.handleOnClickChange2}>
              <ImStack className="icons" 
              style={{color: this.state.color2}}/>STORE</button>
            <button className="btn" style={{color: this.state.color3}} 
            onClick={this.handleOnClickChange3}><ImLaptop className="icons" style={{color: this.state.color3}}/>DESKS</button>
            <button className="btn" style={{color: this.state.color4}} onClick={this.handleOnClickChange4}><ImStatsBars className="icons"style={{color: this.state.color4}}/>POINT</button>
        </div>
      </div>
    );
  }
}