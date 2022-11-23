import { Dispatch } from "react";

interface IAction {
  type: string;
  payload?: any;
}

export const getUsersAsync = (): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getUsers_Pendding());
    const URL_USER = "https://634e9e514af5fdff3a62367c.mockapi.io/users";
    fetch(URL_USER, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers_Success(data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
};

const getUsers_Pendding = (data?: object): IAction => ({
  type: "GET_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Success = (data?: object): IAction => ({
  type: "GET_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Error = (data?: object): IAction => ({
  type: "GET_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});

export const deleteUsersAsync = (id: string): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(deleteUsers_Pending());
    const URL_USER = "https://634e9e514af5fdff3a62367c.mockapi.io/users/" + id;
    fetch(URL_USER, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteUsers_Success(data.id));
      })
      .catch((error) => {
        dispatch(deleteUsers_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const deleteUsers_Success = (id: string) => ({
  type: "DELETE_SUCCESS", // ACTION TYPE
  id: id, // PARAMETER
});
// Action Creator
const deleteUsers_Pending = (data?: object): IAction => ({
  type: "DELETE_PENDING", // ACTION TYPE
  payload: data,
});

// Action Creator
const deleteUsers_Error = (error: any) => ({
  type: "DELETE_ERROR", // ACTION TYPE
  error: error, // PARAMETER
});
