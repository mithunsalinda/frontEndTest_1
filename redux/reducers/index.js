import { combineReducers } from "redux";
import userReducer from "./createuser.reducer";

export default combineReducers({
    userReducer: userReducer
});
