import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ListUser() {
    const navigate = useNavigate();

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getListUser();
    }, [])


    const getListUser = () => {
        let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users";
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setListUser(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    const handleDelete = (userId: any) => {

        let url = "https://634e9e514af5fdff3a62367c.mockapi.io/users/" + userId;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                // setListUser(data);
                console.log("DEL", userId)

                getListUser();

            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    const gotoDetail = (userId: number) => {
        navigate('/detail/' + userId);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Account</th>
                    <th>Password</th>
                    <th colSpan={2}></th>

                </tr>
            </thead>
            <tbody>
                {
                    listUser.map((user: any) => {
                        return (
                            <tr key={`user-${user.id}`}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td className='text-break'>{user.avatar}</td>
                                <td>
                                </td>
                                <td>
                                    <button className="btn-detail" onClick={() => gotoDetail(user.id)}>Detail</button>
                                    <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>

                            </tr>

                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ListUser