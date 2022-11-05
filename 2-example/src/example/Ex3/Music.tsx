import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlayFill } from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import nd from "../../images/1.png"
import List from "./List";
import Player from "./Player"

interface IUser {
  // no: string;
  // image: string;
  // song: string;
  // singer: string;
  // time: string;
}

interface IProps {
  // userProps: IUser;
}

class Music extends Component<IProps> {
  render() {
    return (
      <div className="main">
        <div className="left">
          <h1>Most Popular</h1>
          <p className="ss">92 Songs</p>
          <List/> 
        </div>

        <div className="right">
          <h1>Now Playing</h1>
          <p className="ss">55 Items on the list</p>
          <Player/>
        </div>
      </div>
    );
  }
}
export default Music;