import { combineReducers } from "redux";
import { productsReducer } from "./ProductReducer";

const reducers = combineReducers({
  allroles: productsReducer,
});

export default reducers;