const reducer = (state = "", action) => {
  switch (action.type) {
    case "set":
      return state + action.payload;
    case "remove":
      return "";
    default:
      return state;
  }
};

export default reducer;
