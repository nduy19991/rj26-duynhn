import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUsersAsync, getUsersAsync } from "../actions/userAction";

interface IState {
  userReducers: IUserReducer;
}

interface IUser {
  name: string;
  avatar: string;
  email: string;
  code: string;
  id: string;
}

interface IUserReducer {
  users: Array<IUser>;
  loading: boolean;
  error: any;
}

function ReduxUserList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: IState) => state.userReducers);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  const handleDelete = (userId : string | number) =>{
    console.log(userId);
    dispatch(deleteUsersAsync(userId));
  }

  const navigate = useNavigate();
  
  const gotoDetail = (userId: string) => {
    navigate('/detail/' + userId);
}


  return (
    <>
      {loading ? <p>Loadding...</p> : null}
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
        {users?.map((user) => (
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
        ))}
      </tbody>
        </table>
    </>
  );
}

export default ReduxUserList;
