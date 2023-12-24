import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registrationService from "./registrationService";
import { toast } from "react-toastify";
const initialState = {
  registered_user: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const register_user = createAsyncThunk(
  "registration_Action/post",
  async (data, thunkAPI) => {
    try {
      return await registrationService.registration_Action(data);
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

export const registration_Slice = createSlice({
  name: "registered_user",
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
    //register_user
    [register_user.pending]: (state) => {
      state.isLodaing = true;
    },
    [register_user.fulfilled]: (state, { payload }) => {
      state.isLodaing = false;
      state.isSuccess = true;
      state.registered_user = payload;
    },
    [register_user.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = registration_Slice.actions;
export default registration_Slice.reducer;
