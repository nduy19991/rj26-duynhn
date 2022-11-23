import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../actions/userAction";

interface IState {
  userReducers: IUserReducer;
}

interface IUser {
  id: string;
  name: string;
  avatar: string;
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

  return (
    <>
      {/* {loading ? <p>Loadding...</p> : null} */}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Password</th>
            <th>About</th>

          </tr>
        </thead>
        <tbody>

          {users.map((user) => {
            return (
              <tr key={`user-${user.id}`}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td className='text-break'>{user.avatar}</td>
                <td>
                  <button className="btn-detail">Detail</button>
                  <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>

              </tr>

            )
          })}

        </tbody>
      </table>
    </>
  );
}

export default ReduxUserList;
function handleDelete(id: string) {
  throw new Error("Function not implemented.");
}

