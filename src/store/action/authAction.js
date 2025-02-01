import axios from "axios";
import { authActionTypes } from "../actionTypes"; // Pastikan pathnya benar

const URL_API = import.meta.env.VITE_APP_URL_API_AUTH;

export const login = (email, password) => {
  return async (dispatch) => {
    // Dispatch request action
    dispatch({ type: authActionTypes.GET_LOGIN_REQUEST });

    try {
      // Melakukan request ke API login
      const response = await axios.post(`${URL_API}/login`, {
        email,
        password,
      });

      const { status, message, token } = response.data;

      // Menyimpan token ke localStorage
      localStorage.setItem("token", token);

      // Dispatch success action
      dispatch({
        type: authActionTypes.GET_LOGIN_SUCCESS,
        payload: { status, token, message },
      });

      return { success: true, message }; // Kembalikan response sukses
    } catch (error) {
      // Jika tidak ada response.data atau error response lainnya, fallback
      const errorMessage = error.response?.data?.message || "Login gagal, coba lagi.";

      // Dispatch failed action
      dispatch({
        type: authActionTypes.GET_LOGIN_FAILED,
        payload: errorMessage,
      });

      return { success: false, message: errorMessage }; // Kembalikan response gagal
    }
  };
};
