import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sold_lead_Service from "./SoldLeadsService";

const initialState = {
  sold_leads: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const getsold_leadsAction = createAsyncThunk(
  "sold_lead/getAll",
  async (thunkAPI ) => {
    try {
      return await sold_lead_Service.Get_sold_leads();
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const sold_leadsSlice = createSlice({
  name: "sold_leads",
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
    [getsold_leadsAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getsold_leadsAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.sold_leads = action.payload;
      state.isSuccess = true;
    },
    [getsold_leadsAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = sold_leadsSlice.actions;
export default sold_leadsSlice.reducer;
