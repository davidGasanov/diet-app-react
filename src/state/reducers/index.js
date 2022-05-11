import { combineReducers } from "redux";
import userReducer from "./userReducer";
import jwtReducer from "./jwtReducer";
import populateFoods  from "./foodsReducer";

const reducers = combineReducers({ jwt: jwtReducer, currentUser: userReducer, foods: populateFoods });

export default reducers;

