import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appReducer = combineReducers({
    USER: userSlice
});

const rootReducer = (state, action) => {
    // to clear redux state when logout action is dispatched
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;