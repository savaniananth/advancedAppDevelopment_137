import { ActionTypes } from "../Constants/ActionType";

export const setRole = (username, password,Checkrole) => {
  return {
    type: ActionTypes.SET_ROLE,
    payload: {
      username,
      password,
      Checkrole,
    },
  };
};