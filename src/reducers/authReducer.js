const initialState = {
  isSigned: false,
  userId: "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGN_IN":
      return { ...state, isSigned: true, userId: payload };
    case "SIGN_OUT":
      return { ...state, isSigned: false };
    default:
      return state;
  }
};
