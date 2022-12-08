import React, { useEffect, useState } from 'react'
import garena from '../../../images/garena.png'
import { Navigate, useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Login() {
    const [userName, setUserName] = useState();
    const [userAvatar, setUserAvatar] = useState();
    let navigate = useNavigate()

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("submit", userName, userAvatar);
        let a : any = 'admin' 
        let b : any = 'admin' 
        if (userName===a && userAvatar===b) {
            navigate('/list')
        }else { alert('Wrong Password!!!');
        }
    };

    const handleChange = (event: any) => {
        switch (event.target.name) {
            case "name":
                setUserName(event.target.value);
                break;
            case "avatar":
                setUserAvatar(event.target.value);
                break;

            default:
                break;
        }
    };
    
    return (
        <div className="form">
            <img className="imgga" src={garena} />
            <form className="input" onSubmit={handleSubmit}>
                <label>Username</label>
                <br />
                <input className="input-item"
                    type="text"
                    name="name"
                    value={userName ? userName : ""}
                    onChange={handleChange}
                    placeholder="Enter your Username"
                /> <br />
                <label>Password</label>
                <br />
                <input className="input-item"
                    type="password"
                    onChange={handleChange}
                    value={userAvatar ? userAvatar : ""}
                    name="avatar"
                    placeholder="Enter your Password"
                /> <br />
                <button className="btn-submit"
                    >Login</button>
                <button className="btn-create">Create Account</button>
            </form>
        </div>
    );
}

export default Login;