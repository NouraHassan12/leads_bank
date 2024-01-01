import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LeadBankService from "./BankLeadService";
import { toast } from "react-toastify";
const initialState = {
  lead_bank: {},
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

export const create_lead_bank = createAsyncThunk(
  "create_Bank_Action/post",
  async (data, thunkAPI) => {
    try {
      return await LeadBankService.createBank_Action(data);
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

export const getAvailableLeadsAction = createAsyncThunk(
  "AvailableLeads/getAll",
  async (data, thunkAPI) => {
    try {
      return await LeadBankService.Get_available_leads(data);
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const deleteLeadAction = createAsyncThunk(
  "deleteLead/getAll",
  async (data, thunkAPI) => {
    try {
      return await LeadBankService.deleteLead(data);
    } catch (error) {
      const massage = error.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

export const lead_bank_Slice = createSlice({
  name: "lead_bank",
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
    //create_lead_bank
    [create_lead_bank.pending]: (state) => {
      state.isLodaing = true;
    },
    [create_lead_bank.fulfilled]: (state, { payload }) => {
      state.isLodaing = false;
      state.isSuccess = true;
      state.lead_bank = payload;
    },
    [create_lead_bank.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },

    //get available leads
    [getAvailableLeadsAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [getAvailableLeadsAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.lead_bank = action.payload;
      state.isSuccess = true;
    },
    [getAvailableLeadsAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },

    //delete  lead
    [deleteLeadAction.pending]: (state) => {
      state.isLodaing = true;
    },
    [deleteLeadAction.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.lead_bank = action.payload;
      state.isSuccess = true;
    },
    [deleteLeadAction.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = lead_bank_Slice.actions;
export default lead_bank_Slice.reducer;
