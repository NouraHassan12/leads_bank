import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cities_Service from "./CitiesService";

const initialState = {
  cities: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const getcitiesAction = createAsyncThunk(
  "cities/getAll",
  async (data, thunkAPI) => {
    try {
      return await cities_Service.Get_cities(data);
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const CitiesSlice = createSlice({
  name: "cities",
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
    [getcitiesAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getcitiesAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.cities = action.payload;
      state.isSuccess = true;
    },
    [getcitiesAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = CitiesSlice.actions;
export default CitiesSlice.reducer;
