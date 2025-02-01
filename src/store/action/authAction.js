import axios from "axios";
import { authActionTypes } from "../actionTypes"; // Pastikan pathnya benar

const URL_API = import.meta.env.VITE_APP_URL_API_AUTH;

if (!URL_API) {
  throw new Error("VITE_APP_URL_API_AUTH is not defined in environment variables.");
}

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.GET_LOGIN_REQUEST });

    try {
      const response = await axios.post(`${URL_API}/api/user/login`, {
        email,
        password,
      });

      const { status, message, token } = response.data;

      if (!token) {
        throw new Error("Token tidak ditemukan dalam response.");
      }

      // Simpan token di localStorage
      localStorage.setItem("token", token);

      dispatch({
        type: authActionTypes.GET_LOGIN_SUCCESS,
        payload: { status, token, message },
      });

      return { success: true, message };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login gagal, coba lagi.";

      dispatch({
        type: authActionTypes.GET_LOGIN_FAILED,
        payload: errorMessage,
      });

      return { success: false, message: errorMessage };
    }
  };
};
