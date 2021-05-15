import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import { composeWithDevTools } from 'remote-redux-devtools';

// get the redux dev toolds extension and redux logger 

const store = configureStore({
  reducer: rootReducer,
  middleware:  (getDefaultMiddleware) => composeWithDevTools(getDefaultMiddleware()),
})

export type RootState = ReturnType<typeof store.getState>

export default store