import axios from "axios";
import { actionTypes } from "../actionTypes";


const URL_API = import.meta.env.VITE_URL_API_PENDAFTARAN;
// console.log(token);
const token = localStorage.getItem("token");
export function dataPendaftaran() {
    return (dispatch) => {
      // Memulai request
      dispatch({ type: actionTypes.GET_PENDAFTARAN_REQUEST });
  
      return axios
        .get(`${URL_API}/daftaranggota`, {
          headers: {
            Authorization: `Bearer ${token}`, // Perbaiki interpolasi Bearer Token
          },
        })
        .then((response) => {
          // Ambil data dari response
          const data = response.data.data.map((item) => item.data);
  
          // Dispatch data yang diterima ke redux
          dispatch({
            type: actionTypes.GET_PENDAFTARAN_SUCCESS,
            payload: data,
          });
        })
        .catch((error) => {
          // Tangani error (cek response yang mungkin kosong)
          const errorMessage =
            error.response?.data?.message || "Terjadi kesalahan saat mengambil data";
  
          console.error("Pesan:", errorMessage);
  
          // Dispatch error message ke redux
          dispatch({
            type: actionTypes.GET_PENDAFTARAN_FAILED,
            payload: errorMessage,
          });
        });
    };
  }
export function getPendaftaranById(id) {
    return (dispatch) => {
      // Memulai request
      dispatch({ type: actionTypes.GET_PENDAFTARAN_REQUEST });
  
      return axios
        .get(`${URL_API}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Perbaiki interpolasi Bearer Token
          },
        })
        .then((response) => {
          // Ambil data dari response
          const data = response.data.data;
  
          // Dispatch data yang diterima ke redux
          dispatch({
            type: actionTypes.GET_PENDAFTARAN_SUCCESS,
            payload: data,
          });
        })
        .catch((error) => {
          // Tangani error (cek response yang mungkin kosong)
          const errorMessage =
            error.response?.data?.message || "Terjadi kesalahan saat mengambil data";
  
          console.error("Pesan:", errorMessage);
  
          // Dispatch error message ke redux
          dispatch({
            type: actionTypes.GET_PENDAFTARAN_FAILED,
            payload: errorMessage,
          });
        });
    };
  }

  
  export const createPendaftaran = (params) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.CREATE_PENDAFTARAN_REQUEST });
      
      return axios
        .post(
          `${URL_API}/anggota`,
          params,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        )
        .then((response) => {
          console.log("Response from API:", response.data);        
          const { anggota, message } = response.data;
          dispatch({
            type: actionTypes.CREATE_PENDAFTARAN_SUCCESS,
            payload: { anggota, message },
          });
        })
        .catch((error) => {
          if (error.response) {
            const { message, status } = error.response.data;
            console.error("Error:", message);
            dispatch({
              type: actionTypes.CREATE_PENDAFTARAN_FAILED,
              payload: { message, status },
            });
          }
        });
    };
  };


  export const updatePendaftaran = (id, params) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.UPDATE_PENDAFTARAN_REQUEST }); // Dispatch request update
  
      try {
        const response = await axios.put(
          `${URL_API}/${id}`, // Endpoint update anggota
          params, // Data yang akan diupdate
          {
            headers: {
              Authorization: `Bearer ${token}`, // Otorisasi Bearer token
            },
          }
        );
  
        console.log("Response from API:", response.data);
  
        // Ambil data response jika diperlukan
        const { anggota, message } = response.data;
  
        // Dispatch aksi berhasil dengan payload
        dispatch({
          type: actionTypes.UPDATE_PENDAFTARAN_SUCCESS,
          payload: { anggota, message },
        });
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Gagal memperbarui data anggota";
        console.error("Error:", errorMessage);
  
        // Dispatch aksi gagal dengan error message
        dispatch({
          type: actionTypes.UPDATE_PENDAFTARAN_FAILED,
          payload: errorMessage,
        });
      }
    };
  };
  
  
  

  export const deleteAnggota = (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.DELETE_PENDAFTARAN_REQUEST });
  
      try {
        const response = await axios.delete(`${URL_API}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response from API:", response.data);
        dispatch({
          type: actionTypes.DELETE_PENDAFTARAN_SUCCESS,
          payload: id,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.DELETE_PENDAFTARAN_FAILED,
          payload: error,
        });
      }
    };
  };
  
