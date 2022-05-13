const reducer = (state=[], action)=>{
    if(action.type==="populate" && action.payload.data.length !== state.length){
        
        return action.payload.data;
    } else {
        return state;
    }
}

export default reducer;