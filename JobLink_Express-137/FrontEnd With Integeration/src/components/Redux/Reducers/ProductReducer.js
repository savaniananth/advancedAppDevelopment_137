import { ActionTypes } from "../Constants/ActionType";

const initialState = {
  roles: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROLE:
      return { ...state, roles: [...state.roles, payload] }; 
    default:
      return state;
  }
};