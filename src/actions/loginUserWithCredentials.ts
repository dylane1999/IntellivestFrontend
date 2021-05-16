import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios"
import authSlice from "../reducers/authSlice"

interface userCredentials {
    login: string;
    password: string;
}

const loginUserWithCredentials = createAsyncThunk(
  'auth/loginUserWithCredentials',
  // Declare the type your function argument here:
  async (userCredentials: userCredentials, thunkAPI) => {
    console.log("staret");
    const response = await axios.post("http://localhost:8080/user/login", {login: userCredentials.login, password: userCredentials.password })

    const user = response.data.user
    const tokens = response.data.tokens

    thunkAPI.dispatch(authSlice.actions.addToken(tokens.access_token))
  
    console.log(response.data);
    // Inferred return type: Promise<MyData>

    return response.data
  },
);

export default loginUserWithCredentials
