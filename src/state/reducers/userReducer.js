const reducer = (state = "", action) => {
  switch (action.type) {
    case "login":
      return state + action.payload;
    case "logout":
      return "";
    default:
      return state;
  }
};

export default reducer;
