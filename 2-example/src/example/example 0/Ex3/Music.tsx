import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlayFill } from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { BsSkipBackwardFill, BsFillPauseFill , BsFillSkipForwardFill} from "react-icons/bs";
import { MdRepeat } from "react-icons/md";

import nd from "../../images/1.png"
import List from "./List";

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
          <div className="player">
            <img className="dvd" src= {nd} alt="" />
            <p className="n1">Chance The Rapper</p>
            <p className="n2">Poo King</p>
            <hr />
            <p className="t1">2:10</p>
              <div className="item">
              <FaRandom className="itemm"/> 
              <BsSkipBackwardFill className="itemm"/> 
              <BsFillPauseFill className="itemm"/> 
              <BsFillSkipForwardFill className="itemm"/> 
              <MdRepeat className="itemm"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Music;