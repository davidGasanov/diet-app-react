const reducer = (state = [], action) => {
  if (
    action.type === "populate" 
  ) {
    return action.payload.data;
  } else {
    return state;
  }
};

export default reducer;
