export const setJwt = (jwt) =>{
    return (dispatch)=>{
        dispatch({
            type: 'set',
            payload: jwt
        })
    }
}

export const removeJwt = () =>{
    return (dispatch)=>{
        dispatch({
            type: 'remove',
        })
    }
}