import * as Action from "./actons";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Action.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export const SerchReducer = (state = initialState.serches, action) => {
  switch (action.type) {
    case Action.SERCH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
