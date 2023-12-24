import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service_types_Service from "./ServiceTypeService";

const initialState = {
  serviceTypes: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const getServiceTypesAction = createAsyncThunk(
  "serviceTypes/getAll",
  async (thunkAPI) => {
    try {
      return await service_types_Service.Get_service_types();
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const ServiceTypeSlice = createSlice({
  name: "serviceTypes",
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
    [getServiceTypesAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getServiceTypesAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.serviceTypes = action.payload;
      state.isSuccess = true;
    },
    [getServiceTypesAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = ServiceTypeSlice.actions;
export default ServiceTypeSlice.reducer;
