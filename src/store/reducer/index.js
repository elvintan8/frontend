import { combineReducers } from "redux";
import { dataPendaftaranReducer,deleteAnggotaReducer,createPendaftaranReducer } from "./pendaftaranReducer";


const rootReducer = combineReducers({
dataPendaftaranReducer,
deleteAnggotaReducer,
createPendaftaranReducer
});

export default rootReducer;