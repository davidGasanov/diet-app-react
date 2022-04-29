import { combineReducers } from "redux";
import userReducer from "./userReducer";
import jwtReducer from "./jwtReducer";

const reducers = combineReducers({ jwt: jwtReducer, currentUser: userReducer });

export default reducers;

