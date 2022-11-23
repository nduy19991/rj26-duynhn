import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import avt from "../../images/avt.png";

interface IUser {
  id: number;
  name: string;
  avatar: number;
}

function DetailUser() {
  let params = useParams();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getUser(params.id);
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
  };

  return (
    <div className="user">
      <div>
        <img className="avt" src={avt} />
        <a href="./" style={{color:"#e51d25"}}>Change avatar</a>
        <Link style={{marginTop:"27px"}} to={"/form/" + user?.id} className=" btn btn-primary">
          Update
        </Link>
      </div>
      <div className="text">
        <div className="bgtext">
        <p style={{fontWeight:"500", paddingTop:"15px", fontSize:"19px"}}>Account Setting</p>
        <hr style={{color:"#e51d25", fontSize:"10px"}}/>
        <p>ID: {user?.id}</p>
        <p>Account: {user?.name}</p>
        <p>Password: {user?.avatar}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
