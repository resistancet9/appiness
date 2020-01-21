import api from '../Misc/api';

export function signInUser({ email, password }, history) {
  return function(dispatch) {
    let user = api.getUser(email, password);
    if(user.code == 200) {
        dispatch({ type: "AUTH_USER", payload: { user: user.user} });
        history.push("/dashboard");
    } else {
      alert(user.message);
    }

    console.log(email, password, "redux")
  };
}

export function signOutUser(history) {
  localStorage.removeItem("token");

  return {
    type: "UNAUTH_USER"
  };
}