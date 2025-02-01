import { actionTypes } from "../actionTypes";

const initialState = {
  anggota: [],
  loading: false,
  error: null,
  message: "",
  status: null,
};

export const dataPendaftaranReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PENDAFTARAN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PENDAFTARAN_SUCCESS:
      return { ...state, loading: false, anggota: action.payload };
    case actionTypes.GET_PENDAFTARAN_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const createPendaftaranReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PENDAFTARAN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CREATE_PENDAFTARAN_SUCCESS:
      return { ...state, loading: false, anggota: action.payload.anggota };
    case actionTypes.CREATE_PENDAFTARAN_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteAnggotaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PENDAFTARAN_REQUEST:
      return { ...state, loading: true };

    case actionTypes.DELETE_PENDAFTARAN_SUCCESS:
      return {
        ...state,
        loading: false,
        anggota: state.data.filter((item) => item.id !== action.payload),
      };

    case actionTypes.DELETE_PENDAFTARAN_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
