export const loginUser = (username) => {
    return (dispatch)=>{
        dispatch({
            type: "login",
            payload: username
        })
    }
}

export const logOutUser = () =>{
    return (dispatch)=>{
        dispatch({
            type: "logout",
        })
    }
}