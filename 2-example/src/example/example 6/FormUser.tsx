import React, { useEffect, useState } from 'react'
import "./styles.css";
import garena from '../../images/garena.png'
import { useParams } from 'react-router-dom';
import { getValue } from '@testing-library/user-event/dist/utils';
import { stringify } from 'querystring';

function FormUser() {
    const [userName, setUserName] = useState();
    const [userAvatar, setUserAvatar] = useState();
    let params = useParams();

    useEffect(() => {
        getUser(params.id)
    }, []);

    const getUser = (userId: any) => {
        let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/" + userId;
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setUserName(data?.name);
                setUserAvatar(data?.avatar);
                
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("submit", userName, userAvatar);

        let data = {
            name: userName,
            avatar: userAvatar,
        };
        if (params.id) {
            updateUser(data, params.id)
        } else {
            postUser(data)
        }

    };

    const updateUser = (data: any, userId: string) => {

        let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/" + userId;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const postUser = (data: any) => {

        let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
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
                    type="text"
                    onChange={handleChange}
                    value={userAvatar ? userAvatar : ""}
                    name="avatar"
                    placeholder="Enter your Password"
                /> <br />
                <button className="btn-submit">Submit</button>
                <button className="btn-create">Create Account</button>
            </form>
        </div>
    );
}

export default FormUser;