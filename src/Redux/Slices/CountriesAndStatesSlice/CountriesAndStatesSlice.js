import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countries_Service from "./CountriesAndStatesSliceService";

const initialState = {
  countries: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const getCountriesAction = createAsyncThunk(
  "countries/getAll",
  async (thunkAPI) => {
    try {
      return await countries_Service.Get_countries();
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const CountriesSlice = createSlice({
  name: "countries",
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
    [getCountriesAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getCountriesAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.countries = action.payload;
      state.isSuccess = true;
    },
    [getCountriesAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = CountriesSlice.actions;
export default CountriesSlice.reducer;
