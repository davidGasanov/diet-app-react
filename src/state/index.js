
import { loginUser, logOutUser } from "./action-creators/authorization"
import { setJwt, removeJwt } from "./action-creators/jwt"
import {populateFoods}  from "./action-creators/populateFoods";
const actionCreators = {loginUser, logOutUser, setJwt, removeJwt, populateFoods};

export default actionCreators;
