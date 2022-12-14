import * as React from "react";
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';


interface IAppProps {}

interface IAppState {
  color: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      color: "Red",
    };
  }

  handleOnClickRed = () => {
    this.setState({
      color: "Red",
    });
  };

  handleOnClickBlule = () => {
    this.setState({
      color: "Blue",
    });
  };

  public render() {
    return (
      <div>
        <p style={{color: this.state.color}}>{this.state.color}</p>
        <button
          disabled={this.state.color == "Red"}
          onClick={this.handleOnClickRed}
        >
          Red
        </button>
        <button
          disabled={this.state.color === "Blue"}
          onClick={this.handleOnClickBlule}
        >
          Blue <AiOutlineLike style={{color: "blue"}}/> <AiOutlineDislike/> <AiFillStar/> <FaStarHalfAlt/>
        </button>
      </div>
    );
  }
}