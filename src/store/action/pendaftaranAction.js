import axios from "axios";
import { actionTypes } from "../actionTypes";

const URL_API = import.meta.env.VITE_URL_API_PENDAFTARAN;

const getToken = () => localStorage.getItem("token"); // Fungsi untuk mendapatkan token

export function dataPendaftaran() {
  return (dispatch) => {
    const token = getToken();
    if (!token) {
      return dispatch({
        type: actionTypes.GET_PENDAFTARAN_FAILED,
        payload: "Token tidak ditemukan.",
      });
    }

    dispatch({ type: actionTypes.GET_PENDAFTARAN_REQUEST });

    return axios
      .get(`${URL_API}/api/anggota/daftaranggota`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.map((item) => item.data);
        dispatch({
          type: actionTypes.GET_PENDAFTARAN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Terjadi kesalahan saat mengambil data";
        console.error("Pesan:", errorMessage);
        dispatch({
          type: actionTypes.GET_PENDAFTARAN_FAILED,
          payload: errorMessage,
        });
      });
  };
}

export function getPendaftaranById(id) {
  return (dispatch) => {
    const token = getToken();
    if (!token) {
      return dispatch({
        type: actionTypes.GET_PENDAFTARAN_FAILED,
        payload: "Token tidak ditemukan.",
      });
    }

    dispatch({ type: actionTypes.GET_PENDAFTARAN_REQUEST });

    return axios
      .get(`${URL_API}/api/anggota/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        dispatch({
          type: actionTypes.GET_PENDAFTARAN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Terjadi kesalahan saat mengambil data";
        console.error("Pesan:", errorMessage);
        dispatch({
          type: actionTypes.GET_PENDAFTARAN_FAILED,
          payload: errorMessage,
        });
      });
  };
}

export const createPendaftaran = (params) => {
  return (dispatch) => {
    const token = getToken();
    if (!token) {
      return dispatch({
        type: actionTypes.CREATE_PENDAFTARAN_FAILED,
        payload: "Token tidak ditemukan.",
      });
    }

    dispatch({ type: actionTypes.CREATE_PENDAFTARAN_REQUEST });

    return axios
      .post(
        `${URL_API}/api/anggota/anggota`,
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { anggota, message } = response.data;
        dispatch({
          type: actionTypes.CREATE_PENDAFTARAN_SUCCESS,
          payload: { anggota, message },
        });
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
        dispatch({
          type: actionTypes.CREATE_PENDAFTARAN_FAILED,
          payload: errorMessage,
        });
      });
  };
};

export const updatePendaftaran = (id, params) => {
  return async (dispatch) => {
    const token = getToken();
    if (!token) {
      return dispatch({
        type: actionTypes.UPDATE_PENDAFTARAN_FAILED,
        payload: "Token tidak ditemukan.",
      });
    }

    dispatch({ type: actionTypes.UPDATE_PENDAFTARAN_REQUEST });

    try {
      const response = await axios.put(
        `${URL_API}/api/anggota/anggota/${id}`,
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { anggota, message } = response.data;
      dispatch({
        type: actionTypes.UPDATE_PENDAFTARAN_SUCCESS,
        payload: { anggota, message },
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Gagal memperbarui data anggota";
      dispatch({
        type: actionTypes.UPDATE_PENDAFTARAN_FAILED,
        payload: errorMessage,
      });
    }
  };
};

export const deleteAnggota = (id) => {
  return async (dispatch) => {
    const token = getToken();
    if (!token) {
      return dispatch({
        type: actionTypes.DELETE_PENDAFTARAN_FAILED,
        payload: "Token tidak ditemukan.",
      });
    }

    dispatch({ type: actionTypes.DELETE_PENDAFTARAN_REQUEST });

    try {
      const response = await axios.delete(`${URL_API}/api/anggota/anggota/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.DELETE_PENDAFTARAN_SUCCESS,
        payload: id,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Gagal menghapus data anggota";
      dispatch({
        type: actionTypes.DELETE_PENDAFTARAN_FAILED,
        payload: errorMessage,
      });
    }
  };
};
