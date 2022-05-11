export const populateFoods=(data)=>{
    return (dispatch)=>{
        dispatch({
            type: 'populate',
            payload: data,
        })
    }
};
