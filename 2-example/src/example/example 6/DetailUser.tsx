import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import nd from '../../images/2.png'

interface IUser {
  id: number;
  name: string;
  avatar: number;
}

function DetailUser() {
  let params = useParams();

  const [user, setUser] = useState<IUser>()

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
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className='user'>
      <img className='avt' src={nd} />
      <div className='text'>
        <p>ID: {user?.id}</p>
        <p>Username: {user?.name}</p>
        <p>Password: {user?.avatar}</p>
        <Link to={'/form/' + user?.id} className=' btn btn-primary'>Update</Link>
      </div>
    </div>
  )
}

export default DetailUser