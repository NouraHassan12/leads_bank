import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "./LoginService";
import { toast } from "react-toastify";
 

const initialState = {
  auth_user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const login_user = createAsyncThunk(
  "login_Action/post",
  async (data, thunkAPI) => {
    try {
      return await loginService.login_Action(data);
    } catch (error) {
      const massage =
        (error.response &&
          error.response.data &&
          error.response.data.massage) ||
        error.response.data.error ||
        error.message ||
        error.toString();
      
      error?.response?.data?.errors?.map((err) =>
        toast.error(err.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const login_Slice = createSlice({
  name: "auth_user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.massage = "";
    },
  },

  extraReducers: {
    //login_user
    [login_user.pending]: (state) => {
      state.isLodaing = true;
    },
    [login_user.fulfilled]: (state, { payload }) => {
      state.isLodaing = false;
      state.isSuccess = true;
      state.auth_user = payload;
    },
    [login_user.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = login_Slice.actions;
export default login_Slice.reducer;
