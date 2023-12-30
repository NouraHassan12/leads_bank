import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import state_Service from "./stateService";

const initialState = {
  states: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const getStatesAction = createAsyncThunk(
  "states/getAll",
  async (data, thunkAPI) => {
    try {
      return await state_Service.Get_state(data);
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const StatesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.isDeleteLodaing = false;
      state.massage = "";
    },
  },
  extraReducers: {
    [getStatesAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getStatesAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.states = action.payload;
      state.isSuccess = true;
    },
    [getStatesAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = StatesSlice.actions;
export default StatesSlice.reducer;
