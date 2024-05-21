import { combineReducers } from "redux";
import userReducer from "./reducer";
import postsReducer from "./postsReducer";


const rootReducer=combineReducers({
    user:userReducer,
    Posts:postsReducer
})

export default rootReducer