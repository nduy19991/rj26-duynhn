import * as React from "react";
import "./styles.css";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import nd from "../../images/1.png"
import Rating from "./Rating";
import Caro from "./Caro"


interface IAppProps { }

interface IAppState {
  like: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      like: true,
    };
  }
  setLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };



  public render() {
    return (
      <div className="tab">
        
        <Caro/>
        

        <div  className="like">
          <button className="btn" onClick={this.setLike}  > {this.state.like ? <AiFillLike/> : <AiFillDislike/>} Like </button>
        </div>

        <h4>Ratting For Us</h4>

        <div className="vote">
        <Rating />
        </div>
      </div>
    );
  }
}
