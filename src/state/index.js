
import { loginUser, logOutUser } from "./action-creators/authorization"
import { setJwt, removeJwt } from "./action-creators/jwt"

const actionCreators = {loginUser, logOutUser, setJwt, removeJwt};

export default actionCreators;
