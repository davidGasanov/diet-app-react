const reducer = (state=[], action)=>{
    if(action.type==="populate" && action.payload.length !== state.length){
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;