import { combineReducers } from "redux";
//import appState from "./appState/reducer";
import source from "./Source/reducer";
import products from "./Products/reducer";

export default combineReducers({
  source,
  products,
});
