import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
  } from "./types";
  import AuthService from "../services/auth.service";

  export const register = (values) => (dispatch) => {
    return AuthService.register(values).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: REGISTER_FAIL,
        });
        return Promise.reject();
      }
    );
  };
  export const login = (values) => (dispatch) => {
    return AuthService.login(values).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        return Promise.reject();
      }
    );
  };
  export const logout = () => (dispatch) => {
    return AuthService.logout().then(
      (response) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: LOGOUT_FAIL,
        });
        return Promise.reject();
      }
    );
  };