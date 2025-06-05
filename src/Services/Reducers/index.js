import { combineReducers } from "redux";
import bookReducer from "./BookReducer";



const rootReducer = combineReducers({
   bookReducer,

});

export default rootReducer;