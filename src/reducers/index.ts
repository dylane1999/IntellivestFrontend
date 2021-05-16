import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import userSlice from "./userSlice"

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer
})

export default rootReducer