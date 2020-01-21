let initialState = {
  authenticated: false,
  user: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "AUTH_USER":
      return { authenticated: true, user: payload.user };
    case "AUTH_ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
}