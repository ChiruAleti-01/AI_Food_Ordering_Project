// Dispatch => Call API => Update state based on success or failure

import api from "../../utils/api";

import {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserFail,
  logoutSuccess,
  logoutFail,
  updateRequest,
  updateSuccess,
  updateFail,
} from "../slices/userSlice";


// LOGIN
export const login = (email, password) => async (dispatch) => {

  try {

    dispatch(loginRequest());


    const { data } = await api.post("/v1/users/login", {
  email,
  password,
});

localStorage.setItem("token", data.token);

dispatch(loginSuccess(data.data.user));


    dispatch(
      loginSuccess(data.data.user)
    );


  } catch (error) {

    dispatch(
      loginFail(
        error.response?.data?.message ||
          "Login Failed"
      )
    );

  }

};



// REGISTER
export const register = (userData) => async (dispatch) => {

  try {

    dispatch(loginRequest());


    const { data } = await api.post(
      "/v1/users/signup",
      userData
    );
    localStorage.setItem("token", data.token);

    dispatch(
      loginSuccess(data.data.user)
    );


  } catch (error) {

    dispatch(
      loginFail(
        error.response?.data?.message
      )
    );

  }

};



// LOAD USER
export const loadUser = () => async (dispatch) => {

  try {

    dispatch(loginRequest());


    const { data } = await api.get(
      "/v1/users/me"
    );


    dispatch(
      loginSuccess(data.user)
    );


  } catch (error) {


    dispatch(
      loadUserFail(
        error.response?.data?.message
      )
    );

  }

};



// UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {

  try {


    dispatch(updateRequest());


    const { data } = await api.put(
      "/v1/users/me/update",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    dispatch(
      updateSuccess(data.user)
    );


  } catch (error) {


    dispatch(
      updateFail(
        error.response?.data?.message
      )
    );


  }

};



// LOGOUT
export const logout = () => async (dispatch) => {

  try {
localStorage.removeItem("token");

await api.get("/v1/users/logout");

dispatch(logoutSuccess());

  } catch (error) {


    dispatch(
      logoutFail(
        error.response?.data?.message
      )
    );


  }

};