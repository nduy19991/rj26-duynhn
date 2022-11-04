import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlayFill } from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import nd from "../../images/1.png"

interface IUser {
    no: string;
    image: string;
    song: string;
    singer: string;
    time: string;
}

interface IProps {
    userProps: IUser;
}

class Format extends Component<IProps> {
    render() {
        return (
            <div className="list">
                <p className="title">{this.props.userProps.no}</p>
                <img className="img" src={this.props.userProps.image} alt="" />
                <BsPlayFill className="play" />
                <p className="song">{this.props.userProps.song}</p>
                <p className="name">{this.props.userProps.singer}</p>
                <p className="name">{this.props.userProps.time}</p>
                <AiFillHeart className="tym" />
            </div>
        );
    }
}
export default Format;